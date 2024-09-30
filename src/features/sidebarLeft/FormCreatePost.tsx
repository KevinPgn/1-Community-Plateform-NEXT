"use client"
import {useState} from "react"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs" // Post tab and Image Tab
import { UploadDropzone } from "@uploadthing/react"
import { OurFileRouter } from "@/app/api/uploadthing/core"
import { ContentPost } from "@/components/formCreatePost/ContentPost"
import {useForm} from "react-hook-form"

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
  
  return <form className="w-full">
    <h2 className="text-2xl font-bold mb-5">Create Post</h2>
        <Tabs defaultValue="post" className="w-full">
            <TabsList className="w-full mb-5">
                <TabsTrigger value="post" className="w-full">Post</TabsTrigger>
                <TabsTrigger value="image" className="w-full">Image</TabsTrigger>
            </TabsList>
            <TabsContent value="post">
                <ContentPost content={content} setContent={setContent} />

                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="visibility" className="text-sm font-medium">Post Visibility</label>
                    <select 
                        id="visibility" 
                        name="visibility" 
                        className="w-full h-10 px-3 py-2 text-sm rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        value={isPublic ? "public" : "private"}
                        onChange={(e) => setIsPublic(e.target.value === "public")}
                    >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                </div>
            </TabsContent>
            <TabsContent value="image">
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="image" className="text-sm font-medium">Upload Image</label>
                    <UploadDropzone<OurFileRouter, "imageUploader">
                    endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    console.log(res)
                    setImage(res[0].url)
                }}
                onUploadError={(error: Error) => {
                        console.log(error)
                    }}
                    />
                </div>
            </TabsContent>
        </Tabs>
  </form>
}