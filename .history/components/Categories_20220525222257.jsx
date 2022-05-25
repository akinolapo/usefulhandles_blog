import React, {useState, useEffect} from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then ((newCategories) => setCategories(newCategories))
  }, [])


  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Categor
      </h3>
      </div>
  )

}


export default Categories