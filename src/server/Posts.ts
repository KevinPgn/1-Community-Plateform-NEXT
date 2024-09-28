"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { extractHashtags } from "@/components/utils/extractHashtags"
import { revalidatePath } from "next/cache"
import { cache } from 'react'
import { getSession } from "@/components/utils/CacheSession"

// Create new Post
export const createPost = authenticatedAction
    .schema(z.object({
        content: z.string().min(1).max(280),
        image: z.string().optional(),
    }))
    .action(async ({parsedInput: {content, image}, ctx: {userId}}) => {
        const hashtags = extractHashtags(content)
            
        const post = await prisma.post.create({
            data: {
                content,
                image,
                authorId: userId,
                tags: {
                    connectOrCreate: hashtags.map((hashtag) => ({
                        where: {
                            name: hashtag
                        },
                        create: {
                            name: hashtag
                        }
                    }))
                }
            }
        })

        revalidatePath("/")
        return post
    })

// Récupère tous les posts mais fait en apparaitre que 10 par page
export const getPosts = cache(async () => {
    const session = await getSession()
    const userId = session?.user?.id

    const [posts, totalPosts] = await Promise.all([
        prisma.post.findMany({
            select: {
                id: true,
                content: true,
                image: true,
                createdAt: true,
                author: {
                    select: {
                        id: true,
                        name: true,
                        image: true,
                        pseudo: true,
                    }
                },
                tags: {
                    select: {
                        name: true
                    }
                },
                _count: {
                    select: {
                        likes: true,
                        comments: true,
                        reposts: true,
                    }
                },
                likes: {
                    where: {
                        authorId: userId
                    },
                    select: {
                        id: true
                    }
                },
                reposts: {
                    where: {
                        authorId: userId
                    },
                    select: {
                        id: true
                    }
                },
                bookmarks: {
                    where: {
                        authorId: userId
                    },
                    select: {
                        id: true
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            },
            take: 10
        }),
        prisma.post.count()
    ])

    return {
        posts: posts.map(post => ({
          ...post,
          isLiked: post.likes.length > 0,
          isReposted: post.reposts.length > 0,
          isBookmarked: post.bookmarks.length > 0
        })),
        totalPosts
    }
})
