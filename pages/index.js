import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Top Trending Things</title>
        <meta name="description" content="Here's the list of Top Trending Things from Twitter Trends to Top Stocks to Buy. Find information about the Twitter trends and volume. Find the top trending real life experience horror stories." />
      </Head>

      <main
        className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">TopTrendingThings.in!</a>
        </h1>

        <p className={styles.description}>
          Find the top latest trending things
        </p>

        <div className={styles.grid}>
          <Link href="/twitter"><a className={styles.card}>
            <h2>Twitter &rarr;</h2>
            <h5>Top Trending Hashtags</h5>
          </a>
          </Link>

          {/* <Link href="/stocks"><a className={styles.card}>
            <h2>Stocks &rarr;</h2>
            <h5>Stocks to Buy Today</h5>
          </a>
          </Link> */}

          <Link href="/horror"><a className={styles.card}>
            <h2>Horror &rarr;</h2>
            <h5>Real Life Paranormal Experiences</h5>
          </a>
          </Link>

          {/* <a className={styles.card}
          >
            <h2>Crypto &rarr;</h2>
            <h5>
              Top Crypto Currency Gainers
            </h5>
          </a>

          <a className={styles.card}
          >
            <h2>Instagram &rarr;</h2>
            <h5>
              Top Reels Song
            </h5>
          </a>

          <a className={styles.card}
          >
            <h2>Search Trends &rarr;</h2>
            <h5>
              Top Google Search Trends
            </h5>
          </a> */}
        </div>
      </main>
    </div>
  )
}
