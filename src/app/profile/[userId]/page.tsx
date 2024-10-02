import React from 'react'

interface UserIdProfileProps {
    params: {
        userId: string
    }
}

const UserIdProfile = ({params}: UserIdProfileProps) => {
  return (
    <div>UserIdProfile</div>
  )
}

export default UserIdProfile