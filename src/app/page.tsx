import { SidebarRight } from "@/features/sidebarRight/SidebarRight";

export default async function Home() {
  return (
    <div className="flex flex-1">
      <div className="flex flex-1 p-5 h-screen bg-blue-900 max-w-[1400px] mx-auto">

      </div>

      <SidebarRight />
    </div>
  );
}
