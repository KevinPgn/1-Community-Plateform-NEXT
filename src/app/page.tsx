import { HomeFeeds } from "@/components/homeFeeds/HomeFeeds";
import { Post } from "@/components/posts/Post";
import { SidebarRight } from "@/features/sidebarRight/SidebarRight";
import { getPosts } from "@/server/Post";

export default async function Home({searchParams}: {searchParams: {filter: string}}) {
  const postsFeed = await getPosts();

  return (
    <div className="flex flex-1 justify-center">
      <div className="flex-1 p-5 max-w-[800px] mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Home Feeds</h2>
            <HomeFeeds />
        </div>

        <div className="flex flex-col gap-4 mt-10">
            {postsFeed.map((post) => (
              <Post key={post.id} post={post} />
            ))}
        </div>

      </div>

      <SidebarRight />
    </div>
  );
}