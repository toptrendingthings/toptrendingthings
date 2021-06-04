import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Top Trending Things</title>
        <meta name="description" content="Latest top trending things" />
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
            <p>Top Trending Hashtags</p>
          </a>
          </Link>

          <a className={styles.card}>
            <h2>Youtube &rarr;</h2>
            <p>Top Trending Videos!</p>
          </a>

          <a className={styles.card}
          >
            <h2>Stocks &rarr;</h2>
            <p>Top Gainer Stocks</p>
          </a>

          <a className={styles.card}
          >
            <h2>Crypto &rarr;</h2>
            <p>
              Top Crypto Currency Gainers
            </p>
          </a>

          <a className={styles.card}
          >
            <h2>Instagram &rarr;</h2>
            <p>
              Top Reels Song
            </p>
          </a>

          <a className={styles.card}
          >
            <h2>Search Trends &rarr;</h2>
            <p>
              Top Google Search Trends
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
