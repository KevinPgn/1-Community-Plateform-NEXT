"use client"
import { Button } from "@/components/ui/button"
import { followUser } from "@/server/Post"

export const FollowBtn = ({ userId, isFollowing }: { userId: string, isFollowing: boolean }) => {
  return <Button
    onClick={async () => {
        const test = await followUser({ userToFollowId: userId })
        console.log(test)
    }}
    variant="outline"
  >{isFollowing ? "Unfollow" : "Follow"}</Button>
}