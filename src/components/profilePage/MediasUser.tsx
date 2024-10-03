import React from "react"
import {getUserMediaPosts} from "@/server/Profile.action"
import Link from "next/link"

export const MediasUser = async ({userId}: {userId: string}) => {
  const medias = await getUserMediaPosts(userId)
  
  return <div className="grid grid-cols-3 gap-4 mt-5">
    {medias.map((media) => (
      <Link href={`/post/${media.id}`} key={media.id} className="w-full h-full">
        <img src={media.image || ""} loading="lazy" alt="Media image" className="w-[200px] h-[200px] object-cover rounded-lg" />
      </Link>
    ))}
  </div>
}