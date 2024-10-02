"use client"
import { Flame } from "lucide-react"
import { likePost } from "./actionPost.action"
import {cn} from "@/lib/utils"
import {useOptimistic, useTransition} from "react"

export const LikePost = ({postId, isLiked, likesCount}: {postId: string, isLiked: boolean, likesCount: number}) => {
  const [optimisticLikes, addOptimisticLikes] = useOptimistic(
    {likesCount, isLiked},
    (state, newIsLiked: boolean) => ({
      ...state,
      isLiked: newIsLiked,
      likesCount: newIsLiked ? state.likesCount + 1 : state.likesCount - 1
    })
  )
  const [isPending, startTransition] = useTransition()
  
  const handleLike = () => {
    if(isPending) return
    startTransition(async () => {
      addOptimisticLikes(!optimisticLikes.isLiked)
      await likePost({postId})
    })
  }

  return <div
  onClick={handleLike}
  className="flex items-center gap-1 cursor-pointer group relative">
  <div className="relative">
    <Flame size={19} className={cn(
      "z-10 relative",
      optimisticLikes.isLiked ? "fill-yellow-500 text-yellow-500" : "fill-red-500 text-red-500"
    )}/>
    <div className={cn(
      "absolute inset-0 rounded-full opacity-0 group-hover:opacity-75 blur-md transition-opacity duration-300",
      optimisticLikes.isLiked ? "bg-yellow-500" : "bg-red-500"
    )}></div>
  </div>
  <span className="text-sm text-gray-400">{optimisticLikes.likesCount}</span>
</div>
}