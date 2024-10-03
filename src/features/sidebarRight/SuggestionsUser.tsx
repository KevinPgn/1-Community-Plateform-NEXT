import React from "react"
import { Button } from "@/components/ui/button"
import { getRandomUsers } from "./sidebarRight.action"
import { FollowBtn } from "@/components/utils/FollowBtn"

export const SuggestionsUser = async ({ userId }: { userId: string }) => {
  const suggestedUsers = await getRandomUsers(userId)

  return (
    <div className="rounded-xl p-4 mb-4">
      <h2 className="text-xl font-bold mb-4">Qui suivre</h2>
      {suggestedUsers.map((user) => (
        <div key={user.id} className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full mr-3 flex items-center justify-center text-white font-bold">
              <img src={user.image || ""} alt={user.name || ""} className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-400 text-sm">@{user.pseudo ? user.pseudo : user.name}</p>
            </div>
          </div>
          <FollowBtn userId={user.id} isFollowing={false} />
        </div>
      ))}

      <span className="text-sm dark:text-gray-700 text-gray-500 cursor-pointer hover:underline font-semibold">Voir tout</span>
    </div>
  )
}