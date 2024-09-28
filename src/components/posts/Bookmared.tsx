"use client"
import { Bookmark } from "lucide-react"
import { bookmarkPost } from "./actionPost.action"
import {useOptimistic} from "react"

interface BookmaredProps {
    isBookmarked: boolean;
    postId: string;
}

export const Bookmared = ({ isBookmarked, postId }: BookmaredProps) => {
  const [optimisticBookmarks, addOptimisticBookmark] = useOptimistic<BookmaredProps, boolean>(
    { isBookmarked, postId },
    (state, newIsBookmarked) => ({
      isBookmarked: newIsBookmarked,
      postId: state.postId,
    })
  )

  const handleBookmark = async () => {
    const newIsBookmarked = !optimisticBookmarks.isBookmarked
    addOptimisticBookmark(newIsBookmarked)
    
    try {
      await bookmarkPost({ postId })
    } catch (error) {
      console.error("Failed to update bookmark status:", error)
    }
  }

  return <div
    onClick={handleBookmark}
    className="flex items-center cursor-pointer gap-1 text-sm text-white/50 group">
    <Bookmark className={`w-5 h-5 ${optimisticBookmarks.isBookmarked ? "fill-yellow-500 text-yellow-500" : "text-white/50"} duration-75`} />
  </div>
}