import { Repeat } from "lucide-react"

export const Reposts = ({ repostsCount, isReposted }: { repostsCount: number, isReposted: boolean }) => {
  return <div className="flex items-center cursor-pointer gap-1 text-sm text-white/50 group">
    <Repeat className="w-5 h-5 group-hover:fill-green-500 group-hover:text-green-500 duration-75" />
    {repostsCount}
  </div>
}