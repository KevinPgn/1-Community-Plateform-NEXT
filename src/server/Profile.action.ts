"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { cache } from "react"

export const getProfile = cache(async (userId: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            id: true,
            name: true,
            pseudo: true,
            image: true,
            bio: true,
            banner: true,
            createdAt: true,
            isVerified: true,
            website: true,
            location: true,
        }
    })

    return user
})