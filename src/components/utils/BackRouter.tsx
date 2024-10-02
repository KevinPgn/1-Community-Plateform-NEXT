"use client"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import React from 'react'
import { Button } from "../ui/button"

export const BackRouter = () => {
  const router = useRouter()
  return (
    <div
    onClick={() => router.back()}
    className="flex items-center gap-2 cursor-pointer">
      <Button variant="outline" className="px-3">
        <ArrowLeft size={20} />
      </Button>
      <span className="text-sm font-medium">Back</span>
    </div>
  )
}