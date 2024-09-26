import Link from "next/link"
import Image from "next/image"
import { Links } from "./Links"
import { PosterBtn } from "./PosterBtn"
import { Profile } from "./Profile"
import { getSession } from "@/components/utils/CacheSession"

export const SidebarMenu = async () => {
  const session = await getSession()

  return <aside className="w-[240px] py-2 sticky top-0 h-screen flex flex-col justify-between">
    <div className="flex flex-col space-y-5">
        <Link href="/" className="p-2 rounded-full hover:bg-gray-200/10 w-fit duration-75">
            <Image src="/x-logo.jpg" alt="logo" width={50} height={50} className="rounded-full" priority/>
        </Link>

        <Links />
        <PosterBtn />
    </div>


    <Profile session={session?.user}/>
  </aside>
}