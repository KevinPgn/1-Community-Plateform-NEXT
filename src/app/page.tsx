import { FormCreatePost } from "@/components/formCreatePost/FormCreatePost";
import { TabsPosts } from "@/components/tabsPosts/TabsPosts";
import { getSession } from "@/components/utils/CacheSession";
import { getPosts } from "@/server/Posts";

export default async function Home() {
  const session = await getSession()
  const posts = await getPosts()

  console.log(posts)
  return (
    <div className="flex-1 border-r border-l border-white/10">
      <TabsPosts />
      <FormCreatePost userImage={session?.user?.image} userId={session?.user?.id} />
      

    </div>
  );
}
