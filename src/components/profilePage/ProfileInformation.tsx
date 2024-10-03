import {Button} from '@/components/ui/button'
import {MapPin, Globe} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { FollowBtn } from '../utils/FollowBtn'

export const ProfileInformation = ({user, sessionId}: {user: any, sessionId: string}) => {
    const isFollowed = user.followers.length > 0

    return (
    <div className='w-full mt-24 px-5'>
        <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-1'>
                <h2 className='text-2xl font-bold'>{user.name}</h2>
                <p className='text-sm text-gray-500'>@{user.pseudo ? user.pseudo : user.name}</p>
            </div>
            {sessionId === user.id ? ( <Button variant="outline">Edit Profile</Button> ) : ( <FollowBtn userId={user.id} isFollowing={isFollowed} /> )}
        </div>

        <p className='text-md mt-5'>{user.bio ? user.bio : "No bio yet"}</p>
        <div className='flex items-center gap-2 mt-5'>
            <p className='text-sm font-bold'>{user._count.posts} posts</p>
            <p className='text-sm font-bold'>{user._count.followers} followers</p>
            <p className='text-sm font-bold'>{user._count.following} following</p>
        </div>

        <div className='flex items-center justify-between gap-2 mt-5'>
            <div className='flex items-center gap-5'>
                <p className='text-sm dark:text-gray-400 font-semibold flex items-center gap-2'><MapPin size={16} /> {user.location ? user.location : "No location yet"}</p>
                <p className='text-sm dark:text-gray-400 font-semibold flex items-center gap-2'><Globe size={16} /> {user.website ? user.website : "No website yet"}</p>
            </div>

            {/* The User is Verified */}
            {user.isVerified ? <Badge className='bg-blue-500 text-white'>Verified</Badge> : <Badge className='bg-gray-500 text-white'>Not Verified</Badge>}
        </div>
    </div>
  )
}