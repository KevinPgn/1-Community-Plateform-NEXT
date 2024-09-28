import { Heart } from "lucide-react"

export const Likes = ({ likesCount, isLiked }: { likesCount: number, isLiked: boolean }) => {
  return <>
    <div className="flex items-center cursor-pointer gap-1 text-sm text-white/50 group">
      <Heart className="w-5 h-5 group-hover:fill-red-500 group-hover:text-red-500 duration-75" />
      {likesCount}
    </div>
  </>
}