import { getPosts } from "@/server/Post";
import { Post } from "./Post";

export default async function PostList() {
  const postsFeed = await getPosts();

  return (
    <>
      {postsFeed.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}