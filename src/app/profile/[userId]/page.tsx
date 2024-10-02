import { SidebarRight } from '@/features/sidebarRight/SidebarRight'
import React from 'react'
import { getProfile } from '@/server/Profile.action'
import { getSession } from '@/components/utils/CacheSession'

interface UserIdProfileProps {
    params: {
        userId: string
    }
}

const UserIdProfile = async ({params}: UserIdProfileProps) => {
  const {userId} = params
  const [user, session] = await Promise.all([getProfile(userId), getSession()])

  return (
    <div className="flex flex-1 justify-center">
    
    <div className="flex-1 p-5 max-w-[800px] mx-auto">
        
    </div>

    <SidebarRight />
  </div>
  )
}

export default UserIdProfile