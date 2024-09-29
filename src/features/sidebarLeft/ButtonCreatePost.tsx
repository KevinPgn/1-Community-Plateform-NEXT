"use client"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export const ButtonCreatePost = () => {
  return <Button variant="ghost" className="w-[90%] mt-5 border border-white/20 flex items-center gap-2 p-3 py-5 rounded-md mx-auto">
    <Plus size={21} />
    <span>Create Post</span>
  </Button>
}