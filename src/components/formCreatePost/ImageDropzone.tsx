import { UploadDropzone } from "@uploadthing/react"
import { OurFileRouter } from "@/app/api/uploadthing/core"

export const ImageDropzone = ({setImage, image}: {setImage: (image: string) => void, image: string}) => {
  return <div className="w-full flex flex-col gap-2">
    <label htmlFor="image" className="text-sm font-medium">Upload Image</label>
    {image ? (
      <div className="relative w-full h-64">
        <img
          src={image}
          loading="lazy"
          alt="Uploaded image"
          className="rounded-md"
        />
      </div>
    ) : (
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
    )}
  </div>
}