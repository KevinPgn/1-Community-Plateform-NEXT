import React from 'react'

export const PostDetails = ({ post }: { post: any }) => {
  const postLiked = post.isLiked
  const postRepost = post.isReposted
  console.log(postLiked, postRepost)
  
  return (
    <>

    </>
  )
}