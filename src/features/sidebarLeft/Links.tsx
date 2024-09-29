"use client"
import Link from "next/link"
import { Compass, MessageSquare, User, Image as ImageIcon, Settings, Bell } from "lucide-react"
import { usePathname } from "next/navigation"
import {cn} from "@/lib/utils"

export const Links = () => {
  const pathname = usePathname()
  return <div className="flex flex-col gap-4 p-4 mt-5">
    <Link href="/" className={cn("flex items-center gap-3 p-3 px-5 rounded-xl hover:bg-white hover:text-black hover:font-semibold duration-75", pathname === "/" && "bg-white text-black font-semibold")}>
      <Compass size={21} />
      <span>Home Feed</span>
    </Link>

    <Link href="/" className="flex items-center gap-3 p-3 px-5 rounded-xl hover:bg-white hover:text-black hover:font-semibold duration-75">
      <MessageSquare size={21} />
      <span>Messages</span>
    </Link>

    <Link href="/" className="flex items-center gap-3 p-3 px-5 rounded-xl hover:bg-white hover:text-black hover:font-semibold duration-75">
      <User size={21} />
      <span>Profile</span>
    </Link>

    <Link href="/" className="flex items-center gap-3 p-3 px-5 rounded-xl hover:bg-white hover:text-black hover:font-semibold duration-75">
      <Bell size={21} />
      <span>Notifications</span>
    </Link>

    <Link href="/" className="flex items-center gap-3 p-3 px-5 rounded-xl hover:bg-white hover:text-black hover:font-semibold duration-75">
      <ImageIcon size={21} />
      <span>Media</span>
    </Link>

    <Link href="/" className="flex items-center gap-3 p-3 px-5 rounded-xl hover:bg-white hover:text-black hover:font-semibold duration-75">
      <Settings size={21} />
      <span>Settings</span>
    </Link>
  </div>
}