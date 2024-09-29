import { SuggestionsUser } from "./SuggestionsUser"
import { Tendances } from "./Tendances"

export const SidebarRight = () => {
  return <aside className="h-screen overflow-y-auto flex flex-col p-3 w-[350px] pb-10 max-md:w-[100px] sticky top-0 rounded-tr-lg rounded-br-lg bg-white dark:bg-[#0b0b0b]">
    <SuggestionsUser />
    <Tendances />
  </aside>
}