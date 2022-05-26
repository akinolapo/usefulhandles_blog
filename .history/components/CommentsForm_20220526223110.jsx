import React, {useState, useEffect} from 'react'

const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const name = useRef()
  const wm = useRef()
  const commentEl = useRef()
  return (
    <div>CommentsForm</div>
  )
}

export default CommentsForm