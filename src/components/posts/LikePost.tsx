"use client"
import { Flame } from "lucide-react"
import ConfettiExplosion from 'react-confetti-explosion';
import { useState } from "react";

export const LikePost = ({postId, isLiked, likesCount}: {postId: string, isLiked: boolean, likesCount: number}) => {
  const [isExploding, setIsExploding] = useState(false);

  return <div
  onClick={() => setIsExploding(true)}
  className="flex items-center gap-1 cursor-pointer group relative">
  <div className="relative">
    <Flame size={19} className="fill-red-500 text-red-500 z-10 relative"/>
    <div className="absolute inset-0 bg-red-500 rounded-full opacity-0 group-hover:opacity-75 blur-md transition-opacity duration-300"></div>
  </div>
  <span className="text-sm text-gray-400">{likesCount}</span>
  {isExploding && <ConfettiExplosion force={0.4} duration={2500} particleCount={30} width={400} />}
</div>
}