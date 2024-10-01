import { HomeFeeds } from "@/components/homeFeeds/HomeFeeds";
import PostList from "@/components/posts/PostList";
import { SidebarRight } from "@/features/sidebarRight/SidebarRight";
import { Suspense } from "react";

export default function Home({searchParams}: {searchParams: {filter: string}}) {
  return (
    <div className="flex flex-1 justify-center">
      <div className="flex-1 p-5 max-w-[800px] mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Home Feeds</h2>
            <HomeFeeds />
        </div>

        <div className="flex flex-col gap-4 mt-10">
            <Suspense fallback={<div>Loading...</div>}>
                <PostList />
            </Suspense>
        </div>

      </div>

      <SidebarRight />
    </div>
  );
}