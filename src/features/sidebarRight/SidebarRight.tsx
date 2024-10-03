import { SuggestionsUser } from "./SuggestionsUser"
import { Tendances } from "./Tendances"
import { getSession } from "@/components/utils/CacheSession"
// todo: add the sidebar for mobile support

export const SidebarRight = async () => {
  const session = await getSession()
  return <aside className="h-screen overflow-y-auto flex flex-col p-3 w-[350px] pb-10 max-xl:hidden rounded-tr-lg rounded-br-lg bg-white dark:bg-[#121212]">
    <SuggestionsUser userId={session?.user?.id || ""} />
    <Tendances />
  </aside>
}