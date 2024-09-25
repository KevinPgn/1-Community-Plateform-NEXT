"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
/*
model Post {
  id String @id @default(cuid())
  title String
  content String
  
  authorId String
  author User @relation(fields: [authorId], references: [id])
  
  comments Comment[]
  likes Like[]
  bookmarks Bookmark[]
  reposts Repost[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Comment {
  id String @id @default(cuid())
  content String
  authorId String
  author User @relation(fields: [authorId], references: [id])
  postId String
  post Post @relation(fields: [postId], references: [id])

  parentId String?
  parent Comment? @relation("commentsReplies", fields: [parentId], references: [id])
  replies Comment[] @relation("commentsReplies")

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Like {
  id String @id @default(cuid())
  authorId String
  author User @relation(fields: [authorId], references: [id])
  postId String
  post Post @relation(fields: [postId], references: [id])

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([authorId, postId])
}

model Bookmark {
  id String @id @default(cuid())
  authorId String
  author User @relation(fields: [authorId], references: [id])
  postId String
  post Post @relation(fields: [postId], references: [id])

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([authorId, postId])
}

model Repost {
  id String @id @default(cuid())
  authorId String
  author User @relation(fields: [authorId], references: [id])
  postId String
  post Post @relation(fields: [postId], references: [id])

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([authorId, postId])
}

model Follow {
  id String @id @default(cuid())
  followerId String
  follower User @relation(name: "follower", fields: [followerId], references: [id])
  followingId String
  following User @relation(name: "following", fields: [followingId], references: [id])

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([followerId, followingId])
}

// Demande d'ami
model FriendRequest {
  id String @id @default(cuid())
  senderId String
  sender User @relation(name: "sender", fields: [senderId], references: [id])
  receiverId String
  receiver User @relation(name: "receiver", fields: [receiverId], references: [id])
  status String @default("pending")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([senderId, receiverId])
}

model FriendShip {
  id String @id @default(cuid())
  userId String
  user User @relation(name: "user", fields: [userId], references: [id])
  friendId String
  friend User @relation(name: "friend", fields: [friendId], references: [id])

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([userId, friendId])
}
*/

