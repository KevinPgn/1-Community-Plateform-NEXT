import { formatPostDate } from "../utils/FormatDate";
import Link from "next/link";
import { Flame, MessageSquare, Share2, Repeat2} from "lucide-react";

export const Post = ({post}: {post: any}) => {
  return <div className="flex flex-col gap-4 justify-end w-full items-end mb-3">
    <div className="dark:bg-[#181818] shadow-xl w-full hover:dark:bg-[#202020] hover:bg-gray-100 transition-all duration-300 px-5 rounded-3xl border dark:border-zinc-800 border-zinc-200 p-4 flex gap-4">
        <img src={post.author.image} alt={post.author.name} className="w-10 h-10 rounded-full" />
        
        <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2">
                    <Link href={`/profile/${post.author.id}`}>
                        <span className="text-sm hover:underline font-bold">{post.author.name}</span>
                    </Link>
                    <span className="text-sm dark:text-gray-500 text-gray-500">@{post.author.username ? post.author.username : post.author.name}</span>
                </div>
                <span className="text-sm dark:text-gray-500 text-gray-500">{formatPostDate(post.createdAt)}</span>
            </div>

            <p className="text-md dark:text-gray-300 text-gray-700">{post.content}</p>
            {post.image && <img src={post.image} alt={post.content} className="w-full h-auto rounded-lg" />}
        </div>
    </div>

    <div className="w-[220px] p-3 dark:bg-[#181818] shadow-md dark:border-zinc-800 border-zinc-200 border rounded-full flex items-center justify-between">
        <div className="flex items-center gap-1 cursor-pointer">
            <Flame size={19} className="fill-red-500 text-red-500"/>
            <span className="text-sm dark:text-gray-500 text-gray-500">{post._count.likes}</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
            <MessageSquare size={19} className="text-blue-500 fill-blue-500"/>
            <span className="text-sm dark:text-gray-500 text-gray-500">{post._count.comments}</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
            <Repeat2 size={19} className="text-green-500 fill-green-500"/>
            <span className="text-sm dark:text-gray-500 text-gray-500">{post._count.reposts}</span>
        </div>

        <Share2 size={19} className="cursor-pointer text-gray-500"/>
    </div>
  </div>
}