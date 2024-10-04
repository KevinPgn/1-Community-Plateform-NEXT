"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"

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