"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { extractHashtags } from "@/components/utils/extractHashtags"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

// User can delete his post
export const deletePost = authenticatedAction
    .schema(z.object({
        postId: z.string(),
    }))
    .action(async ({parsedInput: {postId}, ctx:{userId}}) => {
        const post = await prisma.post.findUnique({
            where: {id: postId, authorId: userId}
        })

        if(!post || post.authorId !== userId) {
            throw new Error("Post not found or you are not the author")
        }

        await prisma.post.delete({
            where: {id: postId}
        })

        revalidatePath("/")
})