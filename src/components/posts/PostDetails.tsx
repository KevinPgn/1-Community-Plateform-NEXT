import { formatPostDate } from "../utils/FormatDate"
import { LikePost } from "./LikePost"
import { MessagePost } from "./MessagePost"
import { RepostPost } from "./RepostPost"
import { SharePost } from "./SharePost"

export const PostDetails = ({ post }: { post: any }) => {
  const postAlreadyLiked = post.isLiked
  const postAlreadyReposted = post.isReposted
  
  return (
    <div className='w-full'>
      <div className="w-full shadow-md dark:bg-[#171717] rounded-lg p-5 mt-5">
        <div className="flex items-center gap-2">
          <img src={post.author.image} alt={post.author.name} className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm font-bold">{post.author.name}</p>
            <p className="text-sm text-gray-500">@{post.author.username ? post.author.username : post.author.name}</p>
          </div>
        </div>

        <p className="text-md mt-5 mb-3">{post.content}</p>
        {post.image && <img src={post.image} alt={post.content} className="w-full h-auto rounded-lg mt-5 mb-3" />}

        <span className="text-sm text-gray-500">{formatPostDate(post.createdAt)}</span> 
        <div className="w-full h-[1px] dark:bg-zinc-700 bg-zinc-200 mt-5 mb-3"></div>

        {/* Number of comments, reposts and likes */}
        <div className="flex items-center justify-around gap-2">
          <p className="text-md dark:text-gray-500 text-gray-500">{post._count.comments} comments</p>
          <p className="text-md dark:text-gray-500 text-gray-500">{post._count.reposts} reposts</p>
          <p className="text-md dark:text-gray-500 text-gray-500">{post._count.likes} likes</p>
        </div>

        <div className="w-full h-[1px] dark:bg-zinc-700 bg-zinc-200 mt-5 mb-4"></div>
        <div className="flex items-center justify-between px-5 gap-2">
          <LikePost postId={post.id} isLiked={postAlreadyLiked} likesCount={post._count.likes} />
          <RepostPost postId={post.id} isReposted={postAlreadyReposted} repostsCount={post._count.reposts} />
          <MessagePost commentsCount={post._count.comments} />
          <SharePost postId={post.id} />
        </div>
      </div>
    </div>
  )
}