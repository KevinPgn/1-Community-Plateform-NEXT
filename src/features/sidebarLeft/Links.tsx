"use client"
import Link from "next/link"
import { Compass, MessageSquare, User, Image as ImageIcon, Settings, Bell, Badge } from "lucide-react"
import { usePathname } from "next/navigation"
import {cn} from "@/lib/utils"

interface LinksProps {
  sessionId: string
}

export const Links = ({sessionId}: LinksProps) => {
  const pathname = usePathname()
  return <div className="flex flex-col gap-4 p-4 mt-5">
    <Link href="/" className={cn("flex items-center gap-3 p-3 px-5 rounded-xl hover:dark:bg-white hover:bg-black hover:dark:text-black hover:text-white hover:font-semibold duration-75", (pathname === "/" || pathname.startsWith("/post")) && "dark:bg-white dark:text-black bg-black text-white font-semibold")}>
      <Compass size={21} />
      <span>Home Feed</span>
    </Link>

    <Link href="/" className={cn("flex items-center gap-3 p-3 px-5 rounded-xl hover:dark:bg-white hover:bg-black hover:dark:text-black hover:text-white hover:font-semibold duration-75", pathname === "/messages" && "bg-white text-black font-semibold")}>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <MessageSquare size={21} />
          <span>Messages</span>
        </div>
        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">1</span>
        </div>
      </div>  
    </Link>

    <Link href={`/profile/${sessionId}`} className={cn("flex items-center gap-3 p-3 px-5 rounded-xl hover:dark:bg-white hover:bg-black hover:dark:text-black hover:text-white hover:font-semibold duration-75", pathname === "/profile" && "bg-white text-black font-semibold")}>
      <User size={21} />
      <span>Profile</span>
    </Link>

    <Link href="/" className={cn("flex items-center gap-3 p-3 px-5 rounded-xl hover:dark:bg-white hover:bg-black hover:dark:text-black hover:text-white hover:font-semibold duration-75", pathname === "/notifications" && "bg-white text-black font-semibold")}>
    <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <Bell size={21} />
          <span>Notifications</span>
        </div>
        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">10</span>
        </div>
      </div> 
    </Link>

    <Link href="/" className={cn("flex items-center gap-3 p-3 px-5 rounded-xl hover:dark:bg-white hover:bg-black hover:dark:text-black hover:text-white hover:font-semibold duration-75", pathname === "/media" && "bg-white text-black font-semibold")}>
      <ImageIcon size={21} />
      <span>Media</span>
    </Link>

    <Link href="/" className={cn("flex items-center gap-3 p-3 px-5 rounded-xl hover:dark:bg-white hover:bg-black hover:dark:text-black hover:text-white hover:font-semibold duration-75", pathname === "/settings" && "bg-white text-black font-semibold")}>
      <Settings size={21} />
      <span>Settings</span>
    </Link>
  </div>
}