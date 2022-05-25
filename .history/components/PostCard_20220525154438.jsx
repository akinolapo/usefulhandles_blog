import React from 'react'
import moment from 'moment'

const PostCard = ({ post }) => {
  return (
    <div>
        {post.title}
        {post.excerpt}
    </div>
  )
}

export default PostCard