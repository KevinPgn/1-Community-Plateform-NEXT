"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { extractHashtags } from "@/components/utils/extractHashtags"
import { revalidatePath } from "next/cache"

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