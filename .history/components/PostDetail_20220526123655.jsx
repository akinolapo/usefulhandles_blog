import React from 'react'

const PostDetail = ({post}) => {
  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
      <div className="relative overflow-hidden shadow-md mb-6">
        <img src={post.featuredImage.url} alt={post.title} className='object-top h-full w-full rounded-t-t'></img>
      </div>
    </div>
  )
}

export default PostDetail