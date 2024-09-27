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
import Image from "next/image"

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
      const res = await createPost({
        ...data,
        image: imageUrl
      });
      router.refresh();
      toast.success("Post created successfully");
      setImageUrl(null)
      console.log(res)
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

        {imageUrl && (
          <div className="mt-2 relative w-full h-64 mb-4">
            <img
              loading="lazy"
              src={imageUrl}
              alt="Uploaded image"
              className="rounded-lg w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => setImageUrl(null)}
              className="absolute w-8 h-8 top-2 right-2 bg-blue-500 text-white rounded-full p-1"
            >
              X
            </button>
          </div>
        )}

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
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
          <div className="bg-[#161616] p-4 border border-dashed border-white/10 rounded-lg">
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
        </div>
        </div>
      )}
    </form>
  );
}