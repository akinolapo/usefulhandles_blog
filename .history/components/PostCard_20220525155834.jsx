import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
  console.log(post)
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img src={post.featuredImage.url} alt={post.title} className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'></img>
      </div>
      <h3 className='transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h3>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex justify-center items-center mb-4 lg"></div>
      </div>
    </div>
  )
}

export default PostCard