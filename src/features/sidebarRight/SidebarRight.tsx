import { SearchBar } from "./SearchBar"
import { SubscribeYou } from "./SubscribeYou"

export const SidebarRight = () => {
  return <div className="w-[350px] flex flex-col gap-5 py-3 h-screen sticky top-0">
    <SearchBar />
    <SubscribeYou />
  </div>
}