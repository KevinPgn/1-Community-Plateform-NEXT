import {Button} from '@/components/ui/button'

export const ProfileInformation = ({user, sessionId}: {user: any, sessionId: string}) => {
  return (
    <div className='w-full mt-24 px-5'>
        <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-2'>
                <h2 className='text-2xl font-bold'>{user.name}</h2>
                <p className='text-sm text-gray-500'>@{user.pseudo ? user.pseudo : user.name}</p>
            </div>
            {sessionId === user.id ? ( <Button variant="outline">Edit Profile</Button> ) : ( <Button variant="outline">Follow</Button> )}
        
        </div>
    </div>
  )
}