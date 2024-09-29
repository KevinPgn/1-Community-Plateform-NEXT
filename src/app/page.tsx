import { HomeFeeds } from "@/components/homeFeeds/HomeFeeds";
import { SidebarRight } from "@/features/sidebarRight/SidebarRight";

export default async function Home({searchParams}: {searchParams: {filter: string}}) {
  return (
    <div className="flex flex-1 justify-center">
      <div className="flex-1 p-5 max-w-[1000px] mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Home Feeds</h2>
            <HomeFeeds />
        </div>
      </div>

      <SidebarRight />
    </div>
  );
}