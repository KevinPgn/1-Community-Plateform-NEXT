import { Repeat } from "lucide-react"

export const Reposts = ({ repostsCount, isReposted }: { repostsCount: number, isReposted: boolean }) => {
  return <div className="flex items-center cursor-pointer gap-1 text-sm text-white/50">
    <Repeat className="w-5 h-5" />
    {repostsCount}
  </div>
}