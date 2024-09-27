import { SearchBar } from "./SearchBar"
import { SuggestionsUsers } from "./SuggestionsUsers"
import { TrendingTags } from "./TrendingTags"

export const SidebarRight = () => {
  return <div className="w-[320px] flex flex-col gap-5 py-3 h-screen sticky top-0">
    <SearchBar />
    <SuggestionsUsers />
    <TrendingTags />
  </div>
}