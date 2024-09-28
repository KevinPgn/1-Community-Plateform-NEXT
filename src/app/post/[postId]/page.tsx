import { Post } from '@/components/posts/Post'
import React from 'react'
import { getPostById } from '@/server/Posts'
import { getSession } from '@/components/utils/CacheSession'
const PostDetailsPage = async ({ params }: { params: { postId: string } }) => {
  const post = await getPostById(params.postId)
  const session = await getSession()
  
  return (
    <div className="flex flex-col gap-4 mb-10 w-full">
      <Post key={post.post?.id} post={post.post} userId={session?.user?.id} />
    </div>
  )
}

export default PostDetailsPage