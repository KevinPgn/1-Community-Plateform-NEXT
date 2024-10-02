"use client"
import { Repeat2 } from "lucide-react"
import { repostPost } from "./actionPost.action"
import {cn} from "@/lib/utils"
import {useOptimistic, useTransition} from "react"

export const RepostPost = ({postId, isReposted, repostsCount}: {postId: string, isReposted: boolean, repostsCount: number}) => {
  const [optimisticReposts, addOptimisticReposts] = useOptimistic(
    {repostsCount, isReposted},
    (state, newIsReposted: boolean) => ({
      ...state,
      isReposted: newIsReposted,
      repostsCount: newIsReposted ? state.repostsCount + 1 : state.repostsCount - 1
    })
  )
  const [isPending, startTransition] = useTransition()

  const handleRepost = () => {
    if(isPending) return
    startTransition(async () => {
      addOptimisticReposts(!optimisticReposts.isReposted)
      await repostPost({postId})
    })
  }
  return <div onClick={handleRepost} className="flex items-center gap-2 cursor-pointer group">
  <div className="relative">
    <Repeat2 size={19} className={cn(
      "z-10 relative",
      optimisticReposts.isReposted ? "fill-green-500 text-green-500" : "fill-green-500 text-green-500"
    )}/>
    <div className={cn(
      "absolute inset-0 rounded-full opacity-0 group-hover:opacity-75 blur-md transition-opacity duration-300",
      optimisticReposts.isReposted ? "bg-green-500" : "bg-green-500"
    )}></div>
  </div>
  <span className="text-sm text-gray-400">{optimisticReposts.repostsCount}</span>
</div>
}