"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { extractHashtags } from "@/components/utils/extractHashtags"
import { revalidatePath } from "next/cache"
import {cache} from "react"

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
