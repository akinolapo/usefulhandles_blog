import React, {useEffect, useState} from 'react'
import { Layout } from '../components'

import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return( 
  <la
  <Component {...pageProps} />
  )
)}

export default MyApp