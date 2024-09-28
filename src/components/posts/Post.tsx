import Link from "next/link"

export const Post = ({ post }: { post: any }) => {
  return <div className="border-b border-white/10 p-3 flex gap-2">
    <Link href={`/profile/${post.author.id}`}>
        <img src={post.author.image} alt="avatar" className="w-10 h-10 rounded-full" />
    </Link>
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <div className="flex gap-2">
            <Link href={`/profile/${post.author.id}`}>
                <p className="font-bold hover:underline cursor-pointer text-sm">{post.author.name}</p>
            </Link>
            {post.author.pseudo ? <p className="text-white/50 text-sm">@{post.author.pseudo}</p> : <p className="text-white/50 text-sm">@{post.author.name}</p>}
        </div>
        <p className="text-white/50 text-sm">
        {new Date(post.createdAt).toLocaleDateString()}
        </p>
      </div>
      <p>{post.content}</p>
    </div>
  </div>
}