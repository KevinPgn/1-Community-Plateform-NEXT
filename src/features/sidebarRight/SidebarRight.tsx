import { SearchBar } from "./SearchBar"
import { SuggestionsUsers } from "./SuggestionsUsers"
import { TrendingTags } from "./TrendingTags"
import { getPopularTags } from "@/features/sidebarRight/getTags.action"

export const SidebarRight = async () => {
  const popularTags = await getPopularTags()

  return <div className="w-[320px] flex flex-col gap-5 py-3 h-screen sticky top-0">
    <SearchBar />
    <SuggestionsUsers />
    <TrendingTags popularTags={popularTags} />
  </div>
}