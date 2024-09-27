"use client"
import { Search } from "lucide-react"
import { useDebounce } from "use-debounce"
import { useState } from "react"
import { Input } from "@/components/ui/input"

export const SearchBar = () => {
  const [search, setSearch] = useState("")
  const [debouncedValue] = useDebounce(search, 500) 

  return <div className="flex w-full items-center gap-2 py-1 bg-[#262626] px-5 rounded-full">
    <Search className="w-5 h-5 text-white/50" />
    <Input
      type="text"
      placeholder="Rechercher"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="bg-transparent outline-none text-white"
    />
  </div>
}