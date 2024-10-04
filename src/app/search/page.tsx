import { SidebarRight } from '@/features/sidebarRight/SidebarRight'
import React from 'react'
import { getPostBySearchParams } from '@/server/Post'
import { Post } from '@/components/posts/Post'

interface GetPostBySearchParamsProps {
    searchParams: {
        query: string
    }
}

const GetPostBySearchParams = async ({searchParams}: GetPostBySearchParamsProps) => {
  const {query} = searchParams
  const postsFilter = await getPostBySearchParams(query)
  

    return (
    <div className="flex flex-1 justify-center">
      <div className="flex-1 p-5 max-w-[800px] mx-auto">
        <h2 className="text-xl font-bold mb-3">Search results for "{query}"</h2>
        {postsFilter.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      <SidebarRight />
    </div>
  )
}

export default GetPostBySearchParams