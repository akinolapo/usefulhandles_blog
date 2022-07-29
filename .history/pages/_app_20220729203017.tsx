import React, { useEffect, useState } from 'react'
import { Layout } from '../components'

import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const newLocal = <Component {...pageProps} />
  return (
    <Layout Children={newLocal}>
    </Layout>
  )
}

export default MyApp
