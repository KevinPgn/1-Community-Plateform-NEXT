"use client"
import { Bookmark } from "lucide-react"

export const Bookmared = ({ isBookmarked }: { isBookmarked: boolean }) => {
  return <div className="flex items-center cursor-pointer gap-1 text-sm text-white/50">
    <Bookmark className="w-5 h-5" />
  </div>
}