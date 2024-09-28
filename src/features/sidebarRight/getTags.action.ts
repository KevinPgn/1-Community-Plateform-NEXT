"use server"

import prisma from "@/lib/prisma"
import { cache } from 'react'

interface PopularTag {
  id: string;
  name: string;
  postCount: number;
}

export const getPopularTags = cache(async (limit: number = 10): Promise<PopularTag[]> => {
  const popularTags = await prisma.tag.findMany({
    select: {
      id: true,
      name: true,
      _count: {
        select: {
          posts: true
        }
      }
    },
    orderBy: {
      posts: {
        _count: 'desc'
      }
    },
    take: limit
  })

  return popularTags.map(tag => ({
    id: tag.id,
    name: tag.name,
    postCount: tag._count.posts
  }))
})