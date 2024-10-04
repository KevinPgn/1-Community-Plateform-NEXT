"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { extractHashtags } from "@/components/utils/extractHashtags"
import { revalidatePath } from "next/cache"
import {cache} from "react"
import { getSession } from "@/components/utils/CacheSession"
import { unstable_cache } from "next/cache"

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

export const getPosts = cache(async (
  options: {
    take?: number;
    skip?: number;
    where?: any;
    orderBy?: any;
  } = {}
) => {
  const session = await getSession()
  const currentUserId = session?.user?.id
  
  const [posts, totalCount] = await prisma.$transaction([
    prisma.post.findMany({
      where: {
        isPublic: true,
        ...options.where
      },
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
      take: options.take || 10,
      skip: options.skip || 0,
      orderBy: options.orderBy || { createdAt: "desc" },
    }),
    prisma.post.count({
      where: {
        isPublic: true,
        ...options.where
      }
    })
  ])

  return {
    posts: posts.map(({likes, reposts, ...post}) => ({
      ...post,
      isLiked: likes?.length > 0,
      isReposted: reposts?.length > 0,
    })),
    totalCount
  }
})

// Get post by id
export const getPostById = cache(async (postId: string) => {
    const session = await getSession()
    const currentUserId = session?.user?.id
    
    const post = await prisma.post.findUnique({
        where: {
            id: postId,
        },
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
                take: 10,
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

    return {
        ...post,
        isLiked: Boolean(post?.likes?.length),
        isReposted: Boolean(post?.reposts?.length),
    }
})

// Lutilisateur connecté peut suivre un autre utilisateur
export const followUser = authenticatedAction
    .schema(z.object({
        userToFollowId: z.string(),
    }))
    .action(async ({parsedInput: {userToFollowId}, ctx:{userId}}) => {
        const isFollowed = await prisma.follow.findFirst({
            where: {
                followerId: userToFollowId,
                followingId: userId,
            }
        })
        
        if (isFollowed) {
            await prisma.follow.delete({
                where: {
                    id: isFollowed.id
                }
            })
        } else {
            await prisma.follow.create({
                data: {
                    followerId: userToFollowId,
                    followingId: userId,
                }
            })
        }
        

        revalidatePath(`/profile/${userToFollowId}`)
    })

// Get Post by search params
export const getPostBySearchParams = (query: string) => 
  getPosts({ where: { content: { contains: query } } })
