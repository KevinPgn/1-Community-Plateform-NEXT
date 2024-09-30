"use client"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import {useState} from "react"
import { FormCreatePost } from "../../components/formCreatePost/FormCreatePost"
export const ButtonCreatePost = () => {
  const [isOpen, setIsOpen] = useState(false)

  return <div>
    <Button
    onClick={() => setIsOpen(!isOpen)}
    className="w-[90%] mt-5 border border-white/20 flex items-center gap-2 p-3 py-5 rounded-md mx-auto">
      <Plus size={21} />
      <span>Create Post</span>
    </Button> 

  {isOpen ? (
    <div onClick={() => setIsOpen(!isOpen)} className="absolute top-0 left-0 w-full h-full bg-black/50 z-10">
      <div onClick={(e) => e.stopPropagation()} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:bg-gray-900 bg-gray-50 shadow-lg p-5 rounded-md w-[550px] min-h-[400px]">
        <FormCreatePost />
      </div>
    </div>
  ): null}
  </div>
}