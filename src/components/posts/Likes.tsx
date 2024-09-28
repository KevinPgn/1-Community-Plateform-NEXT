"use client"
import { Heart } from "lucide-react"
import { likePost } from "./actionPost.action"
import {useOptimistic} from "react"

interface LikesProps {
    isLiked: boolean;
    postId: string;
    count: number;
}

export const Likes = ({ count, isLiked, postId }: LikesProps) => {
  const [optimisticLikes, addOptimisticLike] = useOptimistic<LikesProps, boolean>(
    { count, isLiked, postId },
    (state, newIsLiked) => ({
      count: newIsLiked ? state.count + 1 : state.count - 1,
      isLiked: newIsLiked,
      postId: state.postId,
    })
  )

  const handleLike = async () => {
    const newIsLiked = !optimisticLikes.isLiked
    addOptimisticLike(newIsLiked)
    
    try {
      await likePost({ postId })
    } catch (error) {
      console.error("Failed to update like status:", error)
      // Note: We don't need to manually revert the state here.
      // If the server action fails, React will automatically revert the optimistic state.
    }
  }


  return <>
    <div
    onClick={handleLike}
    className="flex items-center cursor-pointer gap-1 text-sm text-white/50 group">
      <Heart className={`w-5 h-5 ${optimisticLikes.isLiked ? "fill-red-500 text-red-500" : "group-hover:fill-red-500 group-hover:text-red-500 duration-75"}`} />
      {optimisticLikes.count}
    </div>
  </>
}