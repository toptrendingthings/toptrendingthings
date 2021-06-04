import '../styles/globals.css'
import Layout from '../comps/Layout';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <script data-ad-client="ca-pub-2163594510758382" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
