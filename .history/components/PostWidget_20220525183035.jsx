import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() =>{
    if(slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
    } else{
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
  }, [slug])
  
  // console.log(relatedPosts)
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Related Posts': "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key></div>
      ))}
    </div>
  )
}

export default PostWidget