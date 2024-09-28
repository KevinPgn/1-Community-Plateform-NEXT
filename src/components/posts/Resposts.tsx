"use client"
import { Repeat } from "lucide-react"
import { useOptimistic } from "react"
import { repostPost } from "./actionPost.action";

interface RepostsProps {
    repostsCount: number;
    isReposted: boolean;
    postId: string;
}

export const Reposts = ({ repostsCount, isReposted, postId }: RepostsProps) => {
  const [optimisticReposts, addOptimisticRepost] = useOptimistic<RepostsProps, boolean>(
    { repostsCount, isReposted, postId },
    (state, newIsReposted) => ({
      repostsCount: newIsReposted ? state.repostsCount + 1 : state.repostsCount - 1,
      isReposted: newIsReposted,
      postId: state.postId
    })
  )

  const handleRepost = async () => {
    const newIsReposted = !optimisticReposts.isReposted
    addOptimisticRepost(newIsReposted)
    
    try {
      await repostPost({ postId })
    } catch (error) {
      console.error("Failed to update repost status:", error)
    }
  }
  return <div
    onClick={handleRepost}
    className="flex items-center cursor-pointer gap-1 text-sm text-white/50 group">
    <Repeat className={`w-5 h-5 ${optimisticReposts.isReposted ? "text-green-500" : "text-white/50 group-hover:text-green-500"} duration-75`} />
    {repostsCount}
  </div>
}