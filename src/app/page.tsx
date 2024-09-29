import { SidebarRight } from "@/features/sidebarRight/SidebarRight";

export default async function Home() {
  return (
    <div className="flex flex-1 justify-center">
      <div className="flex-1 p-5 max-w-[1000px] mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Home Feeds</h2>
            <div className="flex items-center gap-5">
              <span className="text-sm dark:text-white font-semibold cursor-pointer">Recents</span>
              <span className="text-sm text-muted-foreground hover:dark:text-white hover:text-black cursor-pointer">Trendings</span>
              <span className="text-sm text-muted-foreground hover:dark:text-white hover:text-black cursor-pointer">Following</span>
            </div>
        </div>
      </div>

      <SidebarRight />
    </div>
  );
}