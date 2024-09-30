"use client"
import {useState} from "react"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs" // Post tab and Image Tab
import { ContentPost } from "@/components/formCreatePost/ContentPost"
import {useForm} from "react-hook-form"
import { SelectVisibility } from "./SelectVisibility"
import { ImageDropzone } from "./ImageDropzone"
import { createPost } from "@/server/Post"
import { Button } from "@/components/ui/button"

export const FormCreatePost = () => {
  const [content, setContent] = useState("")
  const [isPublic, setIsPublic] = useState(false)
  const [image, setImage] = useState<string>("")
  
  const {register, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      content: "",
      visibility: "private"
    }
  })

  const onSubmit = async (data: any) => {
    try {
      await createPost({content, isPublic, image})
    } catch (error) {
      console.log(error)
    }
  }
  
  return <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
    <h2 className="text-2xl font-bold mb-5">Create Post</h2>
        <Tabs defaultValue="post" className="w-full">
            <TabsList className="w-full mb-5">
                <TabsTrigger value="post" className="w-full">Post</TabsTrigger>
                <TabsTrigger value="image" className="w-full">Image</TabsTrigger>
            </TabsList>
            <TabsContent value="post">
                <ContentPost content={content} setContent={setContent} />
                <SelectVisibility visibility={isPublic} setVisibility={setIsPublic} />
                <Button type="submit" className="w-full mt-5">Create Post</Button>
            </TabsContent>
            <TabsContent value="image">
                <ImageDropzone setImage={setImage} image={image} />
            </TabsContent>
        </Tabs>
  </form>
}