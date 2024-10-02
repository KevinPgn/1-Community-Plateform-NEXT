"use client"
import { useState } from "react"
import { Ellipsis as EllipsisIcon } from "lucide-react"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import { Edit, Trash } from "lucide-react"
import { deletePost } from "./actionPost.action"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const Ellipsis = ({postId}: {postId: string}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleDelete = async () => {
    try{
      await deletePost({postId})
      toast.success("Post deleted successfully")
    } catch(error) {
      toast.error("Error deleting post")
    }
    setIsOpen(false)
  }

  return <div>
  <Popover open={isOpen} onOpenChange={setIsOpen}>
    <PopoverTrigger asChild>
      <div className="absolute cursor-pointer -top-5 right-5 shadow-md hover:dark:bg-[#202020] hover:bg-gray-100 duration-75 dark:bg-[#181818] p-2 rounded-lg group">
        <EllipsisIcon size={20} className="text-gray-500 group-hover:text-gray-700 transition-all duration-75"/>
      </div>
    </PopoverTrigger>
    <PopoverContent className="w-48 flex flex-col gap-2 dark:bg-[#181818] shadow-md dark:border-zinc-800 border-zinc-200 border rounded-lg">
      <div className="flex items-center gap-2 hover:bg-blue-500/20 p-2 rounded-md duration-75 cursor-pointer">
        <Edit className="mr-2 h-4 w-4" />
        <p>Edit</p>
      </div>
      <div className="flex items-center gap-2 text-red-500 hover:bg-red-500/20 p-2 rounded-md duration-75 cursor-pointer" onClick={handleDelete}>
        <Trash className="mr-2 h-4 w-4" />
        <p>Delete</p>
      </div>
    </PopoverContent>
  </Popover>
    
  <ToastContainer />
  </div>
}