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

// Récupère moi 3 utilisateurs aléatoires, qui ne sont pas dans la liste des utilisateurs suivis par l'utilisateur connecté
export const getRandomUsers = async (userId: string) => {
    const users = await prisma.user.findMany({
        where: {
            id: {
                not: userId
            },
            NOT: {
                followers: {
                    some: {
                        followerId: userId
                    }
                }
            }
        },
        take: 3
    })

    return users
}

