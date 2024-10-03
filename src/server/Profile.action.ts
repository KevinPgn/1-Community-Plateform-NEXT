"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { cache } from "react"
import { getSession } from "@/components/utils/CacheSession"

export const getProfile = cache(async (userId: string) => {
    const session = await getSession()
    const currentUserId = session?.user?.id

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
            _count: {
                select: {
                    followers: true,
                    following: true,
                    posts: true
                }
            },
            ...(currentUserId && {
                followers: {
                    where: {
                        followingId: currentUserId
                    },
                    select: {
                        id: true
                    }
                }
            })
        },
    })

    return {
        user: user,
        isFollowing: user?.followers?.length ? true : false
    }
})

export const getUserPosts = cache(async (userId: string) => {
    const session = await getSession()
    const currentUserId = session?.user?.id
    
    const post = await prisma.post.findMany({
        where: {
            authorId: userId,
        },
        take: 10,
        orderBy: { createdAt: 'desc' },
        select: {
            id: true,
            content: true,
            image: true,
            views: true,
            createdAt: true,
            isPublic: true,
            author: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                }
            },
            comments: {
                select: {
                    id: true,
                    content: true,
                    author: {
                        select: {
                            id: true,
                            name: true,
                            image: true,
                        }
                    }
                },
                take: 1,
            },
            _count: {
                select: {
                    comments: true,
                    likes: true,
                    reposts: true,
                }
            },

            // Si l'utilisateur est connecté, ajouter ses likes et reposts à la publication afin d'avoir l'information
            ...(currentUserId && {
                likes: {
                    where: { authorId: currentUserId },
                    select: { id: true }   
                },
                reposts: {
                    where: { authorId: currentUserId },
                    select: { id: true }   
                },
            }),
        },
    })

    const transformedPosts = post.map(post => ({
        ...post,
        isLiked: Boolean(post.likes?.length),
        isReposted: Boolean(post.reposts?.length),
    }));

    return transformedPosts
})

// Fait exactement la même chose que getUserPosts mais pour les getPostLikedByUser
export const getUserLikedPosts = cache(async (userId: string) => {
    const session = await getSession()
    const currentUserId = session?.user?.id
    
    const post = await prisma.post.findMany({
        where: {
            likes: {
                some: {
                    authorId: userId,
                }
            },
        },
        take: 10,
        orderBy: { createdAt: 'desc' },
        select: {
            id: true,
            content: true,
            image: true,
            views: true,
            createdAt: true,
            isPublic: true,
            author: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                }
            },
            comments: {
                select: {
                    id: true,
                    content: true,
                    author: {
                        select: {
                            id: true,
                            name: true,
                            image: true,
                        }
                    }
                },
                take: 1,
            },
            _count: {
                select: {
                    comments: true,
                    likes: true,
                    reposts: true,
                }
            },

            // Si l'utilisateur est connecté, ajouter ses likes et reposts à la publication afin d'avoir l'information
            ...(currentUserId && {
                likes: {
                    where: { authorId: currentUserId },
                    select: { id: true }   
                },
                reposts: {
                    where: { authorId: currentUserId },
                    select: { id: true }   
                },
            }),
        },
    })

    const transformedPosts = post.map(post => ({
        ...post,
        isLiked: Boolean(post.likes?.length),
        isReposted: Boolean(post.reposts?.length),
    }));

    return transformedPosts
})



export const getUserMediaPosts = cache(async (userId: string) => {
    return await prisma.post.findMany({
      where: {
        authorId: userId,
        image: {not: ""}
      },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        image: true,
      },
      take: 10,
    })
  })