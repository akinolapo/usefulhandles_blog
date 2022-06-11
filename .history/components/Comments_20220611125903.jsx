import React, {useState, useEffect} from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '../services'

const Comments = ({slug}) => {
  const [comment, setComment] = useState([])

  useEffect(() =>{
    getComments(slug)
      .then((result) => setComment(result))
  })
  return (
    <div>Comments</div>
  )
}

export default Comments