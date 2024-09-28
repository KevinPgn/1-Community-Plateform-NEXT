import Link from "next/link"
import { CommentsCount } from "./CommentsCount"
import { Likes } from "./Likes"
import { Reposts } from "./Resposts"
import { Bookmared } from "./Bookmared"
import {Share} from "lucide-react"

export const Post = ({ post }: { post: any }) => {
  const displayPseudo = post.author.pseudo ? true : false
  
  return <div className="border-b border-white/10 p-3 flex gap-3 w-full">
    <img src={post.author.image} alt={`${post.author.name} avatar`} loading="lazy" className="w-10 h-10 object-cover rounded-full" />
    <div className="flex flex-col gap-2 w-full">
      <div className="flex gap-2 w-full">
        <div className="flex gap-2">
            <Link href={`/profile/${post.author.id}`}>
                <p className="font-bold hover:underline cursor-pointer text-sm">{post.author.name}</p>
            </Link>
            {displayPseudo ? <p className="text-white/50 text-sm">@{post.author.pseudo}</p> : <p className="text-white/50 text-sm">@{post.author.name}</p>}
        </div>
        <p className="text-white/50 text-sm">
        {new Date(post.createdAt).toLocaleDateString()}
        </p>
      </div>
      <p>{post.content}</p>
      {post.image && <img src={post.image} alt="image" className="w-full h-full object-cover rounded-lg" />}

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-10">
            <CommentsCount commentsCount={post._count.comments} />
            <Reposts repostsCount={post._count.reposts} isReposted={post.isReposted}/>
            <Likes likesCount={post._count.likes} isLiked={post.isLiked}/>
        </div>

        <div className="flex items-center gap-2">
            <Bookmared isBookmarked={post.isBookmarked} />
            <Share className="w-5 h-5 text-white/50 cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
}