"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"

export const getNotificationsBubble = authenticatedAction
    .schema(z.object({}))
    .action(async ({ctx: {userId}}) => {
        const notifications = await prisma.notification.findMany({
            where: {
                userId: userId,
                isRead: false
            },
            select: {
                id: true,
            }
        })

        return notifications.length
    })

export const getNotifications = authenticatedAction
    .schema(z.object({}))
    .action(async ({ctx: {userId}}) => {
        const notifications = await prisma.notification.findMany({
            where: {
                userId: userId,
            },
            select: {
                id: true,
                type: true,
                content: true,
                isRead: true,
                createdAt: true,
            },
            orderBy: {
                createdAt: "desc"
            }
        })

        return notifications
    })

export const markNotificationAsRead = authenticatedAction
    .schema(z.object({
        notificationId: z.string()
    }))
    .action(async ({ctx: {userId}, parsedInput: {notificationId}}) => {
        await prisma.notification.update({
            where: {id: notificationId, userId},
            data: {isRead: true}
        })

        revalidatePath("/notifications")
    })
