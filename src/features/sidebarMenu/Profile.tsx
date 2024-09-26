"use client"
import { useState, useRef, useEffect } from "react"
import { Ellipsis } from "lucide-react"
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"

export const Profile = ({ session }: { session: any }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative">
      <div 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center cursor-pointer justify-between mb-5 px-3 w-full gap-2 hover:bg-gray-200/10 p-2 rounded-full duration-75"
      >
        <div className="flex items-center gap-3">
          <img src={session?.image} loading="lazy" alt="profile" className="w-10 h-10 rounded-full" />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold">{session?.name}</p>
            <p className="text-sm text-gray-500">{session?.pseudo ? session?.pseudo : `@${session?.name}`}</p>
          </div>
        </div>
        <Ellipsis className="w-5 h-5" />
      </div>

      {isMenuOpen && (
        <div 
          ref={menuRef}
          className="absolute bottom-full left-0 mb-2 w-64 bg-black border border-gray-700 rounded-xl shadow-lg p-2"
        >
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-gray-200/10 hover:text-white"
            onClick={() => {/* Logique pour ajouter un compte */}}
          >
            Ajouter un compte existant
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-gray-200/10 hover:text-white"
            onClick={() => {
              setIsMenuOpen(false)
              signOut()
            }}
          >
            Se déconnecter de @{session?.name}
          </Button>
        </div>
      )}
    </div>
  )
}