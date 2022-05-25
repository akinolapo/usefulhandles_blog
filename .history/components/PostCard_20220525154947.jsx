import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img src={post.featuredImage.url} alt={post.title} className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg'></img>
      </div>
    </div>
  )
}

export default PostCard