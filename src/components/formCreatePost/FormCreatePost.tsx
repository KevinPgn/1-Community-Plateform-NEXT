"use client"
import { useRouter } from "next/navigation"
import { Textarea } from "../ui/textarea"
import {useForm} from "react-hook-form"
import { createPost } from "@/server/Posts"
import React from "react"
import { Button } from "../ui/button"
import { Image as ImageIcon } from "lucide-react"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { UploadDropzone } from "@uploadthing/react"
import type { OurFileRouter } from "@/app/api/uploadthing/core"
interface FormCreatePostProps {
  userImage: string | null | undefined
  userId: string | null | undefined
}

export const FormCreatePost = ({userImage, userId}: FormCreatePostProps) => {
  const router = useRouter()
  const {register, handleSubmit, watch, formState: {errors}} = useForm()
  const [isActive, setIsActive] = React.useState(false)
  const [imageUrl, setImageUrl] = React.useState<string | null>(null)
  const characterLimit = 280
  const content = watch("content", "")
  const remainingCharacters = characterLimit - (content?.length || 0)

  const onSubmit = handleSubmit(async (data) => {
    try {
      await createPost({...data, imageUrl});
      router.refresh();
      toast.success("Post created successfully");
      setImageUrl(null)
    } catch (error) {
      toast.error("Error creating post");
    }
  });

  return (
    <form onSubmit={onSubmit} className="border-b flex gap-3 border-white/10 p-4">
      <img
        onClick={() => router.push(`/profile/${userId}`)}
        src={userImage ?? ""}
        loading="lazy"
        alt="user image"
        className="w-10 h-10 rounded-full cursor-pointer"
      />

      <div className="flex flex-1 flex-col">
        <Textarea
          {...register("content", {
            maxLength: characterLimit,
            onChange: (e) => {
              if (e.target.value.length > characterLimit) {
                e.target.value = e.target.value.slice(0, characterLimit);
              }
            },
          })}
          placeholder="What's happening?"
          className="resize-none bg-transparent border-0 text-lg focus:outline-none focus:ring-0 p-0 py-2 overflow-hidden"
        />

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <ImageIcon
            onClick={() => setIsActive(!isActive)}
            className="w-5 h-5 text-blue-500 cursor-pointer" />
            <span
              className={`text-sm ${
                remainingCharacters < 20 ? "text-red-500" : "text-gray-500"
              }`}
            >
              {Math.max(remainingCharacters, 0)}
            </span>
          </div>

          <Button
            className="bg-blue-500 hover:bg-blue-600 rounded-full px-7 py-2"
            disabled={content.length === 0}
          >
            Post
          </Button>
        </div>
      </div>

      <ToastContainer />
      {isActive && (
        <UploadDropzone<OurFileRouter, "imageUploader">
          endpoint="imageUploader"
          onClientUploadComplete={(res: any) => {
            // Vérifiez le type exact de 'res' ici
            console.log(res);
            if (res && res[0] && 'url' in res[0]) {
              setImageUrl(res[0].url);
              toast.success("Image téléchargée avec succès");
              setIsActive(false);
            }
          }}
          onUploadError={(error: Error) => {
            toast.error(`Erreur lors du téléchargement de l'image : ${error.message}`);
          }}
        />
      )}
    </form>
  );
}