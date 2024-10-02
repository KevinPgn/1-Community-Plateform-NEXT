import { SidebarRight } from '@/features/sidebarRight/SidebarRight'
import React from 'react'
import { getProfile } from '@/server/Profile.action'
import { getSession } from '@/components/utils/CacheSession'
import { EnTete } from '@/components/profilePage/EnTete'
import { ProfileInformation } from '@/components/profilePage/ProfileInformation'

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
    
    <div className="flex-1 p-5 max-w-[900px] mx-auto">
        <EnTete userBanner={user?.banner || ""} userAvatar={user?.image || ""} />
        <ProfileInformation user={user} sessionId={session?.user?.id || ""}/>
    </div>

    <SidebarRight />
  </div>
  )
}

export default UserIdProfile