import { FormCreatePost } from "@/components/formCreatePost/FormCreatePost";
import { Post } from "@/components/posts/Post";
import { TabsPosts } from "@/components/tabsPosts/TabsPosts";
import { getSession } from "@/components/utils/CacheSession";
import { getPosts } from "@/server/Posts";

export default async function Home() {
  const session = await getSession()
  const posts = await getPosts()

  return (
    <div className="flex-1 border-r border-l border-white/10">
      <TabsPosts />
      <FormCreatePost userImage={session?.user?.image} userId={session?.user?.id} />
      
      <div className="flex flex-col gap-4">
        {posts.posts.map((post: any) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
