import { SidebarRight } from '@/features/sidebarRight/SidebarRight'
import React from 'react'
import {getNotifications} from '@/server/Notifications'
import { NotificationItem } from '@/components/notifications/Notifications'

const NotificationsPage = async () => {
    const notifications = await getNotifications({})
    return (
        <div className="flex flex-1 justify-center">
            <div className="flex-1 p-5 max-w-[800px] mx-auto">
                {notifications?.data?.map((notification) => (
                    <NotificationItem key={notification.id} notification={notification} />
                ))}
            </div>

            <SidebarRight />
        </div>
    )
}

export default NotificationsPage