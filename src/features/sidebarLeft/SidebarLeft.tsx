import { getSession } from "@/components/utils/CacheSession"
import { Links } from "./Links"
import { ButtonCreatePost } from "./ButtonCreatePost"
import { ProfileInformations } from "./ProfileInformations"

export const SidebarLeft = async () => {
  const session = await getSession()

  return <aside className="h-screen w-[280px] flex flex-col justify-between pb-10 max-xl:hidden sticky top-0 rounded-tr-lg rounded-br-lg bg-white dark:bg-[#0b0b0b]">
    <div className="flex flex-col">
        <div className="relative">
        <img src={session?.user?.image || ""} loading="lazy" alt={session?.user?.name || ""} width={100} height={100} className="rounded-full w-[100px] h-[100px] mx-auto mt-7 max-md:w-[50px] max-md:h-[50px]" />
        </div>

        <div className="flex flex-col gap-1 mt-5">
            <span className="text-xl font-bold text-center">{session?.user?.name}</span>
            <span className="text-sm text-gray-500 text-center">@{session?.user?.name}</span>
        </div>
        
        <Links />
        <ButtonCreatePost />
    </div>

    <div className="flex flex-col gap-1 mt-10 px-5">
        <span className="text-xl font-bold">Settings</span>
        <span className="text-sm text-gray-500">Account</span>

        <ProfileInformations userSession={session}/>
    </div>
  </aside>
}