import {MessageCircle} from "lucide-react"
export const CommentsCount = ({ commentsCount }: { commentsCount: number }) => {
  return <div className="flex items-center cursor-pointer gap-1 text-sm text-white/50">
    <MessageCircle className="w-5 h-5" />
    {commentsCount}
  </div>
}