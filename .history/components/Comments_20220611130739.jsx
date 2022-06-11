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
      {comments.length > 0 && (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
          <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
            {comments.length}
            {' '}
            Comments
          </h3>
          {comments.map((comment) =>(
            <div key={comment.createdAt} className='border-gray-100 mb-4 pb-4 border-b'>
              <p className='mb-4'>
                <span className='font-semibold'>{comment.name}</span>
                {' '}
                on
                {' '}
                {moment(comment.cre)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments