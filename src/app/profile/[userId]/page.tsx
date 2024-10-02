import { SidebarRight } from '@/features/sidebarRight/SidebarRight'
import React from 'react'

interface UserIdProfileProps {
    params: {
        userId: string
    }
}

const UserIdProfile = ({params}: UserIdProfileProps) => {
  return (
    <div className="flex flex-1 justify-center">
    <div className="flex-1 p-5 max-w-[800px] mx-auto">
        
    </div>

    <SidebarRight />
  </div>
  )
}

export default UserIdProfile