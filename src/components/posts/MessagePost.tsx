"use client"
import { MessageSquare } from "lucide-react"

export const MessagePost = ({commentsCount}: {commentsCount: number}) => {
  return <div className="flex items-center gap-2 cursor-pointer group">
  <div className="relative">
    <MessageSquare size={19} className="text-blue-500 fill-blue-500 z-10 relative"/>
    <div className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-75 blur-md transition-opacity duration-300"></div>
  </div>
  <span className="text-sm text-gray-400">{commentsCount}</span>
</div>
}