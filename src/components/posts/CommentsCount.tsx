import {MessageCircle} from "lucide-react"
export const CommentsCount = ({ commentsCount }: { commentsCount: number }) => {
  return <div className="flex items-center cursor-pointer gap-1 text-sm text-white/50 group">
    <MessageCircle className="w-5 h-5 group-hover:fill-blue-500 group-hover:text-blue-500 duration-75" />
    {commentsCount}
  </div>
}