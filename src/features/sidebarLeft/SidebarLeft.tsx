import { getSession } from "@/components/utils/CacheSession"
import { Links } from "./Links"
import { ButtonCreatePost } from "./ButtonCreatePost"
import { ProfileInformations } from "./ProfileInformations"
// todo: add the sidebar for mobile support
import { getNotificationsBubble } from "@/server/Notifications"

export const SidebarLeft = async () => {
  const session = await getSession()
  const notificationsBubble = await getNotificationsBubble({})
  console.log(notificationsBubble)
  return <aside className="w-[280px] h-screen flex flex-col justify-between pb-10 max-xl:hidden rounded-tr-lg rounded-br-lg bg-white dark:bg-[#121212]">
    <div className="flex flex-col">
        <div className="relative">
        <img src={session?.user?.image || ""} loading="lazy" alt={session?.user?.name || ""} width={80} height={80} className="rounded-full mx-auto mt-7 max-md:w-[50px] max-md:h-[50px]" />
        </div>

        <div className="flex flex-col gap-1 mt-5">
            <span className="text-xl font-bold text-center">{session?.user?.name}</span>
            <span className="text-sm text-gray-500 text-center">@{session?.user?.name}</span>
        </div>
        
        <Links sessionId={session?.user?.id || ""} notificationsBubble={notificationsBubble?.data}/>
        <ButtonCreatePost />
    </div>

    <div className="flex flex-col gap-1 px-5">
        <ProfileInformations userSession={session}/>
    </div>
  </aside>
}