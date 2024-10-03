import React, { Suspense } from "react"
import { Tabs, TabsContent as Content, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MediasUser } from "./MediasUser"
import { getUserPosts, getUserLikedPosts } from "@/server/Profile.action"  
import { Post } from "../posts/Post"

const PostsList = async ({ posts }: { posts: any[] }) => (
  <>
    {posts.map((post) => (
      <Post key={post.id} post={post} />
    ))}
  </>
)

export const TabsContent = async ({userId}: {userId: string}) => {
  return (
    <Tabs defaultValue="posts" className="w-full mt-10">
      <TabsList className="w-full rounded-full bg-gray-200 dark:bg-zinc-900 px-5 py-6">
        <TabsTrigger value="posts" className="w-full text-md rounded-full">Posts</TabsTrigger>
        <TabsTrigger value="likes" className="w-full text-md rounded-full">Likes</TabsTrigger>
        <TabsTrigger value="medias" className="w-full text-md rounded-full">Medias</TabsTrigger>
      </TabsList>
      <Content value="posts">
        <Suspense fallback={<div>Loading posts...</div>}>
          <PostsList posts={await getUserPosts(userId)} />
        </Suspense>
      </Content>
      <Content value="likes">
        <Suspense fallback={<div>Loading liked posts...</div>}>
          <PostsList posts={await getUserLikedPosts(userId)} />
        </Suspense>
      </Content>
      <Content value="medias">
        <Suspense fallback={<div>Loading media...</div>}>
          <MediasUser userId={userId} />
        </Suspense>
      </Content>
    </Tabs>
  )
}