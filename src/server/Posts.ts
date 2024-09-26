"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { extractHashtags } from "@/components/utils/extractHashtags"
import { revalidatePath } from "next/cache"
import { cache } from 'react'

// Create new Post
export const createPost = authenticatedAction
    .schema(z.object({
        content: z.string().min(1),
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
                    create: hashtags.map((hashtag) => ({
                        name: hashtag
                    }))
                }
            }
        })

        revalidatePath("/")
        return post
    })

// Récupère tous les posts mais fait en apparaitre que 10 par page
export const getPosts = cache(async (page: number, pageSize: number = 10) => {
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
                    }
                },
                _count: {
                    select: {
                        likes: true,
                        comments: true,
                    }
                }
            },
            take: pageSize,
            skip: (page - 1) * pageSize,
            orderBy: {
                createdAt: "desc"
            }
        }),
        prisma.post.count()
    ])

    return {
        posts,
        totalPages: Math.ceil(totalPosts / pageSize),
        currentPage: page,
    }
})