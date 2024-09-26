import Link from "next/link"
import Image from "next/image"
import { Links } from "./Links"

export const SidebarMenu = () => {
  return <div className="w-[200px] py-2 h-screen">
    <Link href="/">
        <Image src="/x-logo.jpg" alt="logo" width={50} height={50} className="rounded-full" />
    </Link>

    <Links />
  </div>
}