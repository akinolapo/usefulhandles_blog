import React, { useEffect, useState, PropsWithChildren } from 'react'
import { Layout } from '../components'

import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout Children={<Component {...pageProps} />})>
    </Layout>
  )
}

export default MyApp
