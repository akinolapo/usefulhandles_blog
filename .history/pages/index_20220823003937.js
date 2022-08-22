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
        <title>WordPressVee</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="WordPress How-To Guides and Tutorials. Create, optimize and manage your website effectively without giving up design or function." />
        <meta name="keywords" content="WordPress, WordPressVeeWordPress Tips, WordPress Themes, WordPress Plugins" />
        <meta name="p:domain_verify" content="bf026029358a6034db453899e649e032" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5462795276187031"
              crossorigin="anonymous"></script>
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