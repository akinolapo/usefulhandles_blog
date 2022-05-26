import React from 'react'
import {getPostDetails}

const Author = ({author}) => {
  return (
    <div>
      <img src={author.photo.url} alt={author.name} height="100px" width="100px" className='align-middle rounded-b-full'></img>
    </div>
  )
}

export default Author