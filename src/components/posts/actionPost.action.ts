"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"

// Lutilisateur peut liké un post
export const likePost = authenticatedAction
    .schema(z.object({
        postId: z.string()
    }))
    .action(async ({parsedInput: {postId}, ctx: {userId}}) => {
        const existingLike = await prisma.like.findFirst({
            where: {
                postId,
                authorId: userId
            }
        })

        if (existingLike) {
            await prisma.like.delete({
                where: {
                    id: existingLike.id
                }
            })
        } else {
            await prisma.like.create({
                data: {
                    postId,
                    authorId: userId
                }
            })
        }

        revalidatePath(`/post/${postId}`)
    })

// Lutilisateur peut bookmark un post
export const bookmarkPost = authenticatedAction
    .schema(z.object({
        postId: z.string()
    }))
    .action(async ({parsedInput: {postId}, ctx: {userId}}) => {
        const existingBookmark = await prisma.bookmark.findFirst({
            where: {
                postId,
                authorId: userId
            }
        })

        if (existingBookmark) {
            await prisma.bookmark.delete({
                where: {
                    id: existingBookmark.id
                }
            })
        } else {
            await prisma.bookmark.create({
                data: {
                    postId,
                    authorId: userId
                }
            })
        }

        revalidatePath(`/post/${postId}`)
    })

// Lutilisateur peut reposter un post
export const repostPost = authenticatedAction
    .schema(z.object({
        postId: z.string()
    }))
    .action(async ({parsedInput: {postId}, ctx: {userId}}) => {
        const existingRepost = await prisma.repost.findFirst({
            where: {
                postId,
                authorId: userId
            }
        })

        if (existingRepost) {
            await prisma.repost.delete({
                where: {
                    id: existingRepost.id
                }
            })
        } else {
            await prisma.repost.create({
                data: {
                    postId,
                    authorId: userId
                }
            })
        }

        revalidatePath(`/post/${postId}`)
    })
