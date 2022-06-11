import React, {useState, useRef, useEffect} from 'react'

import { submitComment } from '../services'

const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  const handleCommentSubmission = () => {
    setError(false)
    const {value: comment} = commentEl.current
    const {value: name} = nameEl.current
    const {value: email} = emailEl.current
    const {checked: storeData} = storeDataEl.current
    if(!comment || !name || !email){
      setError(true)
      return
    }

    const commentObj = {name, email, comment, slug}

    if(storeData){
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else{
      localStorage.removeItem('name', name);
      localStorage.removeItem('email', email);
    }

    submitComment(commentObj)
      .then((res) =>{
        setShowSuccessMessage(true)
        setTimeout(())
      })
  }
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pd-4'>Comment Form</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea ref={commentEl} className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' placeholder='Comment' name='comment'>
        </textarea>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input type='text' ref={nameEl} className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' placeholder='Name' name='name'></input>

        <input type='email' ref={emailEl} className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' placeholder='Email' name='email'></input>
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <div>
          <input ref={storeDataEl} type="checkbox" id="storeData" name="storeData" value="true"></input>
          <label className='text-gray-500 cursor-pointer ml-2' htmlFor='storeData'>Save my e-mail and name for the next time I comment.</label>
        </div>
      </div>
      {error && <p className='text-xs text-red-500'>All fields are required</p>}
      <div className="mt-8">
        <button className='transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer' type='button' onClick={handleCommentSubmission}>Post Comment</button>
        {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Comment Submitted for review</span>}
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4"></div>
    </div>
  )
}

export default CommentsForm