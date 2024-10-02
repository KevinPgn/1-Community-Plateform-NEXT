import { getTrendingsTags } from "./sidebarRight.action";
import { Suspense } from "react";
import Link from "next/link";
import React from 'react'
async function TrendingTags() {
  const trendingTags = await getTrendingsTags();

  return (
    <ul className="space-y-5">
      {trendingTags.map((tag, index) => (
        <li key={index} className="dark:bg-[#181818] p-3 px-5 rounded-md shadow-md hover:scale-105 transition-all duration-300 cursor-pointer">
          <Link href={`/search?query=%23${tag.name}`}>
            <h3 className="text-md font-semibold">#{tag.name}</h3>
            <p className="text-sm text-muted-foreground">
              {tag._count.posts} posts
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Tendances() {
  return (
    <>
      <h2 className="text-lg font-semibold mb-2">Top Tendances</h2>
      <Suspense fallback={<div className="h-full w-full bg-gray-100 animate-pulse"></div>}>
        <TrendingTags />
      </Suspense>
    </>
  );
}