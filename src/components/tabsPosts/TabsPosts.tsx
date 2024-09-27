"use client"
import { usePathname } from "next/navigation"

export const TabsPosts = () => {
  const pathname = usePathname()
  return <div className="h-16 flex items-center border-b border-white/10">
    <button className={`hover:text-white transition-colors flex-1 h-full flex items-center justify-center relative ${pathname === "/" ? "text-white font-bold after:content-[''] after:absolute after:w-full after:left-0 after:bottom-0 after:h-[2px] rounded-full after:bg-blue-500" : "text-white/50"}`}>
      For you
    </button>
    <button className={`hover:text-white transition-colors flex-1 h-full flex items-center justify-center relative ${pathname === "/following" ? "text-white font-bold after:content-[''] after:absolute after:w-full after:left-0 after:bottom-0 after:h-[2px] rounded-full after:bg-blue-500" : "text-white/50"}`}>
      Following
    </button>
  </div>
}