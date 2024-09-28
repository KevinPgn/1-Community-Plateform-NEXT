"use client"
import { Heart } from "lucide-react"
import { likePost } from "@/server/Posts"

export const Likes = ({ likesCount, isLiked, postId }: { likesCount: number, isLiked: boolean, postId: string }) => {
  return <>
    <div
    onClick={() => likePost({postId})}
    className="flex items-center cursor-pointer gap-1 text-sm text-white/50 group">
      <Heart className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : "fill-white/50 group-hover:fill-red-500 group-hover:text-red-500 duration-75"}`} />
      {likesCount}
    </div>
  </>
}