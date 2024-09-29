"use client"

import React from "react"
import { Button } from "@/components/ui/button"

interface SuggestionUser {
  id: string
  name: string
  username: string
  color: string
}

const suggestedUsers: SuggestionUser[] = [
  { id: "1", name: "Alice Dupont", username: "alice_dev", color: "#FF6B6B" },
  { id: "2", name: "Bob Martin", username: "bob_coder", color: "#4ECDC4" },
  { id: "3", name: "Charlie Moreau", username: "charlie_ai", color: "#45B7D1" },
]

export const SuggestionsUser = () => {
  return (
    <div className="rounded-xl p-4 mb-4">
      <h2 className="text-xl font-bold mb-4">Qui suivre</h2>
      {suggestedUsers.map((user) => (
        <div key={user.id} className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div 
              className="w-10 h-10 rounded-full mr-3 flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: user.color }}
            >
              {user.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-400 text-sm">@{user.username}</p>
            </div>
          </div>
          <Button variant="outline">Suivre</Button>
        </div>
      ))}

      <span className="text-sm dark:text-gray-700 text-gray-500 cursor-pointer font-semibold">Voir tout</span>
    </div>
  )
}