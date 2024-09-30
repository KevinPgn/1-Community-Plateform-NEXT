"use client"
import {useState} from "react"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs" // Post tab and Image Tab
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UploadDropzone } from "@uploadthing/react"
import { OurFileRouter } from "@/app/api/uploadthing/core"
export const FormCreatePost = () => {
    const [content, setContent] = useState("")
    const [isPublic, setIsPublic] = useState(false)
    const [image, setImage] = useState<string>("")

  return <div className="w-full">
    <h2 className="text-2xl font-bold mb-5">Create Post</h2>
        <Tabs defaultValue="post" className="w-full">
            <TabsList className="w-full mb-5">
                <TabsTrigger value="post" className="w-full">Post</TabsTrigger>
                <TabsTrigger value="image" className="w-full">Image</TabsTrigger>
            </TabsList>
            <TabsContent value="post">
                <div className="w-full flex flex-col gap-2 mb-5">
                    <label htmlFor="content" className="text-sm font-medium">Post Content</label>
                    <Textarea
                    id="content"
                    placeholder="What's on your mind?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full min-h-[150px]"
                    />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="category" className="text-sm font-medium">Post Visibility</label>
                    <Select>
                        <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                        </SelectContent>
                    </Select>
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
  </div>
}