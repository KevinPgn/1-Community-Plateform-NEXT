import { formatPostDate } from "../utils/FormatDate";
import Link from "next/link";

export const Post = ({post}: {post: any}) => {
  return <div className="dark:bg-[#181818] shadow-xl w-full hover:dark:bg-[#202020] hover:bg-gray-100 transition-all duration-300 px-5 rounded-3xl border dark:border-gray-700 border-gray-200 p-4 flex gap-4">
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
}