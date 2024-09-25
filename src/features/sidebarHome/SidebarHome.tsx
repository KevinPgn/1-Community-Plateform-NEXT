import Link from "next/link"

export const SidebarHome = () => {
  return <div className="w-[250px] bg-[#f8e9fd] dark:bg-[#161616]">
    <Link href="/" className="flex items-center w-fit gap-2 p-4">
      <h1 className="text-2xl w-fit font-bold">Twitto</h1>
    </Link>
  </div>
}