"use client"
import { Ellipsis, LogOut, User, Sun, Moon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
export const ProfileInformations = ({userSession}: {userSession: any}) => {
  const {theme, setTheme} = useTheme()
  const router = useRouter()

    return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex p-2 hover:bg-white/10 cursor-pointer rounded-lg items-center justify-between mt-3 duration-75">
          <div className="flex items-center gap-2">
            <img src={userSession?.user?.image || ""} loading="lazy" alt={userSession?.user?.name || ""} width={40} height={40} className="rounded-full" />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold">{userSession?.user?.name}</span>
              <span className="text-sm text-gray-500">@{userSession?.user?.name}</span>
            </div>
          </div>    
          <Ellipsis size={20} className="text-gray-500" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <div className="flex flex-col space-y-2">
          <Button variant="ghost" className="w-full justify-start" onClick={() => router.push("/api/auth/signout")}>
            <LogOut className="mr-2 h-4 w-4" />
            Se déconnecter
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <User className="mr-2 h-4 w-4" />
            Détails Profile
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? (
              <Sun className="mr-2 h-4 w-4" />
            ) : (
              <Moon className="mr-2 h-4 w-4" />
            )}
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}