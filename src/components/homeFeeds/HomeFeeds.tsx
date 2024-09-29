"use client"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"

export const HomeFeeds = () => {
  const searchParams = useSearchParams()
  const currentFilter = searchParams.get('filter') || 'recent'

  return (
    <nav aria-label="Filtres du flux d'accueil" className="flex items-center gap-5">
      <Link
        href="/?filter=recent"
        className={`text-sm font-semibold cursor-pointer ${
          currentFilter === 'recent' ? 'dark:text-white' : 'text-muted-foreground hover:dark:text-white hover:text-black'
        }`}
        aria-current={currentFilter === 'recent' ? 'page' : undefined}
      >
        Recents
      </Link>
      <Link
        href="/?filter=trending"
        className={`text-sm cursor-pointer ${
          currentFilter === 'trending' ? 'dark:text-white font-semibold' : 'text-muted-foreground hover:dark:text-white hover:text-black'
        }`}
        aria-current={currentFilter === 'trending' ? 'page' : undefined}
      >
        Trendings
      </Link>
      <Link
        href="/?filter=following"
        className={`text-sm cursor-pointer ${
          currentFilter === 'following' ? 'dark:text-white font-semibold' : 'text-muted-foreground hover:dark:text-white hover:text-black'
        }`}
        aria-current={currentFilter === 'following' ? 'page' : undefined}
      >
        Following
      </Link>
    </nav>
  )
}