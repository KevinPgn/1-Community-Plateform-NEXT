import { Ellipsis } from "lucide-react"

export const Profile = ({ session }: { session: any }) => {  
  return <div className="flex items-center cursor-pointer justify-between mb-5 px-3 w-full gap-2 hover:bg-gray-200/10 p-2 rounded-full duration-75">
    <div className="flex items-center gap-3">
        <img src={session?.image} loading="lazy" alt="profile" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold">{session?.name}</p>
            <p className="text-sm text-gray-500">{session?.pseudo ? session?.pseudo : `@${session?.name}`}</p>
        </div>
    </div>

    <Ellipsis className="w-5 h-5" />
  </div>
}