import React from "react"
import { getPosts } from "@/server/Post";
import { Post } from "./Post";
import { Pagination } from "@/components/ui/pagination";

export default async function PostList({ page = 1, pageSize = 10 }: { page: number, pageSize: number }) {
  const { posts, totalCount } = await getPosts({ 
    take: pageSize, 
    skip: (page - 1) * pageSize 
  });

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <Pagination 
        totalPages={totalPages} 
        currentPage={page} 
        pageSize={pageSize}
      />
    </>
  );
}