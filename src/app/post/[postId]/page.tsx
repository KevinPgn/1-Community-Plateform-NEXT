import React from 'react'
import { Suspense } from "react";
import { SidebarRight } from "@/features/sidebarRight/SidebarRight";

interface PostIdPageProps {
  params: {
    postId: string;
  };
}

const PostIdPage = async ({ params }: PostIdPageProps) => {
  return (
    <div className="flex flex-1 justify-center">
      <div className="flex-1 p-5 max-w-[800px] mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Home Feeds</h2>
            
        </div>

        <div className="flex flex-col gap-4 mt-10">
            <Suspense fallback={<div>Loading...</div>}>
                
            </Suspense>
        </div>

      </div>

      <SidebarRight />
    </div>
  )
}

export default PostIdPage