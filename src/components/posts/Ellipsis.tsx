"use client"
import { Ellipsis as EllipsisIcon } from "lucide-react"

export const Ellipsis = () => {
  return <div className="absolute cursor-pointer -top-5 right-5 shadow-md hover:dark:bg-[#202020] hover:bg-gray-100 duration-75 dark:bg-[#181818] p-2 rounded-lg group">
    <EllipsisIcon size={20} className="text-gray-500 group-hover:text-gray-700 transition-all duration-75"/>
  </div>
}