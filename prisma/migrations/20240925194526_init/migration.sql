-- CreateTable
CREATE TABLE "PostsWithoutCommunity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "image" TEXT,
    "authorId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "PostsWithoutCommunity_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CommentPostWithoutCommunity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "postWithoutCommunityId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "CommentPostWithoutCommunity_postWithoutCommunityId_fkey" FOREIGN KEY ("postWithoutCommunityId") REFERENCES "PostsWithoutCommunity" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CommentPostWithoutCommunity_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LikePostWithoutCommunity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "postWithoutCommunityId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "LikePostWithoutCommunity_postWithoutCommunityId_fkey" FOREIGN KEY ("postWithoutCommunityId") REFERENCES "PostsWithoutCommunity" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "LikePostWithoutCommunity_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BookmarkPostWithoutCommunity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "postWithoutCommunityId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BookmarkPostWithoutCommunity_postWithoutCommunityId_fkey" FOREIGN KEY ("postWithoutCommunityId") REFERENCES "PostsWithoutCommunity" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "BookmarkPostWithoutCommunity_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "LikePostWithoutCommunity_authorId_postWithoutCommunityId_key" ON "LikePostWithoutCommunity"("authorId", "postWithoutCommunityId");

-- CreateIndex
CREATE UNIQUE INDEX "BookmarkPostWithoutCommunity_authorId_postWithoutCommunityId_key" ON "BookmarkPostWithoutCommunity"("authorId", "postWithoutCommunityId");
