import React, {useState, useEffect} from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '../services'

const Comments = ({slug}) => {
  const [comments, setComments] = useState([])

  useEffect(() =>{
    getComments(slug)
      .then((result) => setComments(result))
  })
  return (
    <>
      {comment.length > 0 && (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'></div>
      )}
    </>
  )
}

export default Comments