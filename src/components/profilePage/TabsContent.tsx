import React from "react"
import { Tabs, TabsContent as Content, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MediasUser } from "./MediasUser"
import { getUserPosts } from "@/server/Profile.action"  
import { Post } from "../posts/Post"

export const TabsContent = async ({userId}: {userId: string}) => {
//   tabs : Posts de l'utilisateur, Like de l'utilisateur, Medias de l'utilisateur
  const posts = await getUserPosts(userId)

  return (
    <Tabs defaultValue="posts" className="w-full mt-10">
      <TabsList className="w-full rounded-full bg-gray-200 dark:bg-zinc-900 px-5 py-6">
        <TabsTrigger value="posts" className="w-full text-md rounded-full">Posts</TabsTrigger>
        <TabsTrigger value="likes" className="w-full text-md rounded-full">Likes</TabsTrigger>
        <TabsTrigger value="medias" className="w-full text-md rounded-full">Medias</TabsTrigger>
      </TabsList>
      <Content value="posts">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Content>
      <Content value="likes">
        {/* Content for Likes tab */}
      </Content>
      <Content value="medias">
        <MediasUser userId={userId} />
      </Content>
    </Tabs>
  )
}