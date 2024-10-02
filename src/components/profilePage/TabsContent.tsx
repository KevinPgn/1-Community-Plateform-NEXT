import React from "react"
import { Tabs, TabsContent as Content, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const TabsContent = () => {
//   tabs : Posts de l'utilisateur, Like de l'utilisateur, Medias de l'utilisateur
  
  return <Tabs className="w-full mt-10">
    <TabsList className="w-full rounded-full bg-gray-200 dark:bg-zinc-900 px-5 py-6">
        <TabsTrigger value="posts" className="w-full text-md rounded-full">Posts</TabsTrigger>
        <TabsTrigger value="likes" className="w-full text-md rounded-full">Likes</TabsTrigger>
        <TabsTrigger value="medias" className="w-full text-md rounded-full">Medias</TabsTrigger>
    </TabsList>
  </Tabs>
}