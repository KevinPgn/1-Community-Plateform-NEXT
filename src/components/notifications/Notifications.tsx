"use client"
import React from 'react';
import { cn } from '@/lib/utils';
import { markNotificationAsRead } from '@/server/Notifications';

export function NotificationItem({ notification }: any) {
  const { id, type, content, isRead, createdAt } = notification;

  const typeStyles: Record<string, string> =  {
    info: 'bg-blue-100 text-blue-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    success: 'bg-green-100 text-green-800',
  };

  const handleClick = async () => {
    if (!isRead) {
      await markNotificationAsRead({ notificationId: id });
    }
  };

  return (
    <li
      onClick={handleClick}
      className={cn(
        'p-4 rounded shadow cursor-pointer transition-all duration-200 hover:opacity-80',
        typeStyles[type] || 'bg-gray-100 text-gray-800',
        !isRead && 'border-l-4 border-indigo-500'
      )}
    >
      <div className="flex justify-between items-center">
        <span className="font-medium capitalize">{type}</span>
        <span className="text-sm text-gray-600">
          {new Date(createdAt).toLocaleDateString()}
        </span>
      </div>
      <p className="mt-2">{content}</p>
    </li>
  );
}