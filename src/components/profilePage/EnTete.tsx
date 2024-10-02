interface EnTeteProps {
    userBanner: string
    userAvatar: string
}

export const EnTete = ({userBanner, userAvatar}: EnTeteProps) => {
  return (
    <div className="w-full relative">
      {/* Banner */}
      <div 
        className="w-full h-[150px] bg-cover bg-center"
        style={{ backgroundImage: userBanner ? `url(${userBanner})` : 'none' }}
      >
        {!userBanner && <div className="w-full h-[150px] bg-gray-200 dark:bg-zinc-900" />}
      </div>
      
      {/* Avatar */}
      <div className="absolute left-5 -bottom-16">
        <div className="w-28 h-28 rounded-full border-4 border-white dark:border-zinc-900 overflow-hidden">
          <img 
            src={userAvatar} 
            alt="userAvatar" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}