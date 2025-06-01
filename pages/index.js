// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections/index';


export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>SpankRadio</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="WordPress How-To Guides and Tutorials. Create, optimize and manage your website effectively without giving up design or function." />
        <meta name="keywords" content="Spankradio, WordPress, WordPressVee, WordPress Tips, WordPress Themes, WordPress Plugins" />
        <meta name="google-adsense-account" content="ca-pub-9267352546076218"></meta>
          </Head>
          <FeaturedPosts />
          <div className=" grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className='lg:col-span-12 lg:grid lg:grid-cols-3 lg:gap-4 col-span-1'>
              {posts.map((post, index) => (
                <PostCard post={post.node} key={post.title} />
              ))}
            </div>
            {/* <div className="lg:col-span-12 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget/>
            <Categories/>
          </div>
        </div> */}
          </div>

        </div>
        )
}



        export async function getStaticProps() {
  const posts = (await getPosts()) || []

        return {
          props: {posts},
        revalidate: 10
  }
}