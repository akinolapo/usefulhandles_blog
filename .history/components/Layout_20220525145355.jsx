import React, { Children } from 'react'
import {Header} from './'

const Layout = () => {
  return (
    <>
        <Header/>
        {Children}
    </>
  )
}

export default Layout