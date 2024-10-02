import React from 'react'
import { SidebarRight } from "@/features/sidebarRight/SidebarRight";
import { PostDetails } from "@/components/posts/PostDetails";
import { getPostById } from "@/server/Post";
import { BackRouter } from '@/components/utils/BackRouter';

interface PostIdPageProps {
  params: {
    postId: string;
  };
}

const PostIdPage = async ({ params }: PostIdPageProps) => {
  const post = await getPostById(params.postId)

  return (
    <div className="flex flex-1 justify-center overflow-y-auto">
      <div className="flex-1 p-5 max-w-[800px] mx-auto">
        <BackRouter />
        <PostDetails post={post} />
      </div>

      <SidebarRight />
    </div>
  )
}

export default PostIdPage