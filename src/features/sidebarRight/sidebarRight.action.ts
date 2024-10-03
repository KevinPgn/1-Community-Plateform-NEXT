"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"

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

// Récupère moi 3 utilisateurs aléatoires, que lutilisateur connecté ne suit pas
export const getRandomUsersNotFollowed = authenticatedAction
    .schema(z.object({}))
    .action(async ({ctx: {userId}}) => {
        const users = await prisma.user.findMany({
            where: {
                NOT: {
                    followers: {
                        some: {
                            followingId: userId
                        }
                    }
                },
                id: {
                    not: userId
                }
            },
            select: {
                id: true,
                name: true,
                image: true,
                pseudo: true
            },
            take: 3,
            orderBy: {
                createdAt: 'desc'
            }
        })

        return users
    })