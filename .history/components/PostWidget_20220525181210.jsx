import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostWidget = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() =>{
    if(slug) {
      getSimilarPosts(category, slug)
        .then((result))
    }
  }, [input])     
  return (
    <div>
      Recent Post
    </div>
  )
}

export default PostWidget