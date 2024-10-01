"use client"
import { Ellipsis as EllipsisIcon } from "lucide-react"
import {useState} from "react"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import { Edit, Trash } from "lucide-react"

export const Ellipsis = ({postId}: {postId: string}) => {
  const [isOpen, setIsOpen] = useState(false)

  return <Popover>
    <PopoverTrigger asChild>
      <div className="absolute cursor-pointer -top-5 right-5 shadow-md hover:dark:bg-[#202020] hover:bg-gray-100 duration-75 dark:bg-[#181818] p-2 rounded-lg group">
        <EllipsisIcon size={20} className="text-gray-500 group-hover:text-gray-700 transition-all duration-75"/>
      </div>
    </PopoverTrigger>
    <PopoverContent className="w-48 flex flex-col gap-2">
      <div className="flex items-center gap-2 hover:bg-blue-500/20 p-2 rounded-md duration-75 cursor-pointer">
        <Edit className="mr-2 h-4 w-4" />
        <p>Edit</p>
      </div>
      <div className="flex items-center gap-2 hover:bg-red-500/20 p-2 rounded-md duration-75 cursor-pointer">
        <Trash className="mr-2 h-4 w-4" />
        <p>Delete</p>
      </div>
    </PopoverContent>
  </Popover>
}