import React, {useContext} from 'react'
import Link from 'next/link'

const categories = [{name: 'WordPress', slug: 'wordpress'}, {name: 'JavaScript', slug: 'javascript'}]

const Header = () => {
  return (
    <div xclaassName='container mx-auto px-10 mb-8'>
        <div className="border-b w-full inline-block border-blue-400 py-8">
            <div className="md:float-left block">
                <Link href='/'>
                    <span className='cursor-pointer font-bold text-4xl text-white'>UsefulHandles</span>
                </Link>
            </div>

            <div className="hidden md:float-left md:contents">
                {categories.map((category) =>(
                    <Link key={categories.slug} href={`/category/${category.slug}`}>
                        
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header