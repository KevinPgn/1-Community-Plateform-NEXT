import React from 'react'
import { SidebarRight } from "@/features/sidebarRight/SidebarRight";
import { PostDetails } from "@/components/posts/PostDetails";
import { getPostById } from "@/server/Post";

interface PostIdPageProps {
  params: {
    postId: string;
  };
}

const PostIdPage = async ({ params }: PostIdPageProps) => {
  const post = await getPostById(params.postId)

  return (
    <div className="flex flex-1 justify-center">
      <div className="flex-1 p-5 max-w-[800px] mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Home Feeds</h2>
            
        </div>

        <div className="flex flex-col gap-4 mt-10">
            <PostDetails post={post} />
        </div>

      </div>

      <SidebarRight />
    </div>
  )
}

export default PostIdPage