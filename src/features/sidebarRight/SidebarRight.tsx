import { SuggestionsUser } from "./SuggestionsUser"

export const SidebarRight = () => {
  return <aside className="h-screen p-3 w-[350px] flex flex-col justify-between pb-10 max-md:w-[100px] sticky top-0 rounded-tr-lg rounded-br-lg bg-white dark:bg-[#0b0b0b]">
    <SuggestionsUser />
  </aside>
}