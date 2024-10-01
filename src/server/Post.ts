"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { extractHashtags } from "@/components/utils/extractHashtags"
import { revalidatePath } from "next/cache"
import {cache} from "react"
import { getSession } from "@/components/utils/CacheSession"

const cachedExtractHashtags = cache(extractHashtags)

export const createPost = authenticatedAction
    .schema(z.object({
        content: z.string().min(1).max(280),
        image: z.string().optional(),
        isPublic: z.boolean().optional().default(true),
    }))
    .action(async ({parsedInput: {content, image, isPublic}, ctx:{userId}}) => {
        const hashtags = cachedExtractHashtags(content)

        const post = await prisma.post.create({
            data: {
                content,
                image,
                isPublic,
                tags: {
                    connectOrCreate: hashtags.map((tag) => ({
                        where: {
                            name: tag,
                        },
                        create: {
                            name: tag,
                        }
                    }))
                },
                authorId: userId,
            }
        })
        
        revalidatePath("/")
        return post
    })

export const getPosts = cache(async () => {
    const session = await getSession()
    const currentUserId = session?.user?.id
    
    const posts = await prisma.post.findMany({
        where: {
            isPublic: true,
        },
        select: {
            id: true,
            content: true,
            image: true,
            views: true,
            createdAt: true,
            isPublic: true,
            author: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                }
            },
            comments: {
                select: {
                    id: true,
                    content: true,
                },
                take: 1,
            },
            _count: {
                select: {
                    comments: true,
                    likes: true,
                    reposts: true,
                }
            },

            // Si l'utilisateur est connecté, ajouter ses likes et reposts à la publication afin d'avoir l'information
            ...(currentUserId && {
                likes: {
                    where: { authorId: currentUserId },
                    select: { id: true }   
                },
                reposts: {
                    where: { authorId: currentUserId },
                    select: { id: true }   
                },
            }),
        },
        take: 10,
        orderBy: {
            createdAt: "desc",
        },
    })

    return posts.map(({likes, reposts, ...post}) => ({
        ...post,
        isLiked: likes.length > 0,
        isReposted: reposts.length > 0,
    }))
})