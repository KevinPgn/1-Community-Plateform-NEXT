"use client"
import { Share2 } from "lucide-react"

export const SharePost = ({postId}: {postId: string}) => {
  const handleShare = () => {
    navigator.clipboard.writeText(`${window.location.href}${postId}`)
  }

  return <div onClick={handleShare} className="relative group">
  <Share2 size={19} className="cursor-pointer text-gray-500 group-hover:text-yellow-500 duration-300 z-10 relative"/>
  <div className="absolute inset-0 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-75 blur-md transition-opacity duration-300"></div>
</div>
}