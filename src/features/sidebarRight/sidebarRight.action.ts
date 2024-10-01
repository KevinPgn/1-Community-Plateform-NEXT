"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { extractHashtags } from "@/components/utils/extractHashtags"

// Get the 5 mosts useds tags
export const getTrendingsTags = async () => {
    const hashtags = await prisma.tag.findMany({
        select: {
            name: true,
            _count: {
                select: {
                    posts: true
                }
            }
        },
        orderBy: {
            posts: {
                _count: "desc"
            }
        },
        take: 5
    })

    return hashtags
}