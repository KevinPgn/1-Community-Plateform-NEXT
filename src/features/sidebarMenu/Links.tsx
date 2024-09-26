"use client"
import Link from "next/link"
import { Home, Search, Bell, Bookmark, User, Settings } from "lucide-react"
import {cn} from "@/lib/utils"
import { usePathname } from "next/navigation"

export const Links = () => {
  const pathname = usePathname()

  return <div className="flex flex-col gap-4 mt-7">
    <Link href="/" className={cn("flex items-center p-2 gap-3 w-fit px-3 hover:bg-gray-200/10 rounded-full duration-75", {
      "text-white font-bold": pathname === "/",
    })}>
      <Home size={27} fill={pathname === "/" ? "white" : "none"} />
      <span className="text-gray-200 text-lg">Accueil</span>
    </Link>
    <Link href="/search" className={cn("flex items-center p-2 gap-3 w-fit px-3 hover:bg-gray-200/10 rounded-full duration-75", {
      "text-white font-bold": pathname === "/search",
    })}>
      <Search size={27} fill={pathname === "/search" ? "white" : "none"} />
      <span className="text-gray-200 text-lg">Explorer</span>
    </Link>
    <Link href="/notifications" className={cn("flex items-center p-2 gap-3 w-fit px-3 hover:bg-gray-200/10 rounded-full duration-75", {
      "text-white font-bold": pathname === "/notifications",
    })}>
      <Bell size={27} fill={pathname === "/notifications" ? "white" : "none"} />
      <span className="text-gray-200 text-lg">Notifications</span>
    </Link>
    <Link href="/bookmarks" className={cn("flex items-center p-2 gap-3 w-fit px-3 hover:bg-gray-200/10 rounded-full duration-75", {
      "text-white font-bold": pathname === "/bookmarks",
    })}>
      <Bookmark size={27} fill={pathname === "/bookmarks" ? "white" : "none"} />
      <span className="text-gray-200 text-lg">Signets</span>
    </Link>
    <Link href="/profile" className={cn("flex items-center p-2 gap-3 w-fit px-3 hover:bg-gray-200/10 rounded-full duration-75", {
      "text-white font-bold": pathname === "/profile",
    })}>
      <User size={27} fill={pathname === "/profile" ? "white" : "none"} />
      <span className="text-gray-200 text-lg">Profil</span>
    </Link>
    <Link href="/settings" className={cn("flex items-center p-2 gap-3 w-fit px-3 hover:bg-gray-200/10 rounded-full duration-75", {
      "text-white font-bold": pathname === "/settings",
    })}>
      <Settings size={27} fill={pathname === "/settings" ? "white" : "none"} />
      <span className="text-gray-200 text-lg">Paramètres</span>
    </Link>
  </div>
}