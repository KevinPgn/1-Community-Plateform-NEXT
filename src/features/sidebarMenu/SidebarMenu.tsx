import Link from "next/link"
import Image from "next/image"
import { Links } from "./Links"
import { PosterBtn } from "./PosterBtn"
import { Profile } from "./Profile"
import { getSession } from "@/components/utils/CacheSession"

export const SidebarMenu = async () => {
  const session = await getSession()

  return <div className="w-[230px] py-2 h-screen flex flex-col justify-between">
    <div className="flex flex-col">
        <Link href="/">
            <Image src="/x-logo.jpg" alt="logo" width={50} height={50} className="rounded-full" />
        </Link>

        <Links />
        <PosterBtn />
    </div>


    <Profile session={session?.user}/>
  </div>
}