import { SuggestionsUser } from "./SuggestionsUser"
import { Tendances } from "./Tendances"

export const SidebarRight = () => {
  return <aside className="h-screen overflow-y-auto flex flex-col p-3 w-[350px] pb-10 max-xl:hidden rounded-tr-lg rounded-br-lg bg-white dark:bg-[#121212]">
    <SuggestionsUser />
    <Tendances />
  </aside>
}