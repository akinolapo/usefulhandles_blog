import React, {useState, useRef, useEffect} from 'react'

const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  const handleCommentSubmission = () => {

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
      {error && <p className='text-xs text-red-500'>All fields are required</p>}
      <div className="mt-8">
        <button className='transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px' type='button' onClick={handleCommentSubmission}>Post Comment</button>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4"></div>
    </div>
  )
}

export default CommentsForm