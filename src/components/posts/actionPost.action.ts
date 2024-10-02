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

// Like the post
export const likePost = authenticatedAction
    .schema(z.object({
        postId: z.string(),
    }))
    .action(async ({parsedInput: {postId}, ctx:{userId}}) => {
        const post = await prisma.post.findUnique({
            where: {id: postId}
        })

        if(!post) {
            throw new Error("Post not found")
        }

        const userLikedPost = await prisma.like.findUnique({
            where: {authorId_postId: {postId, authorId: userId}}
        })

        if(userLikedPost) {
            await prisma.like.delete({
                where: {id: userLikedPost.id}
            })
        } else {
            await prisma.like.create({
                data: {postId, authorId: userId}  
            })
        }

        revalidatePath(`/post/${postId}`)
    })

