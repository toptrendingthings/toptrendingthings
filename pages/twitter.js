import styles from '../styles/Twitter.module.css'

export const getStaticProps = async () => {
    const URL = 'https://top-trend.herokuapp.com/twitter/topTrends?id=1'
    const response = await fetch(URL);
    const data = await response.json();
    return {
        props: {
            data: data ? JSON.parse(JSON.stringify(data)) : []
        }
    }
}

const Twitter = ({ data }) => {
    const trendList = (data[0] || {}).trends;
    const place = (data[0] || {}).locations[0];
    return (
        <div>
            <h2>Twitter Trends Now</h2>
            <h3>Top Trending Twitter {place.name}</h3>
            <table className={styles.twitterTable}>
                <thead>
                    <tr>
                        <th className={styles.th}>Rank</th>
                        <th className={styles.th}>Hashtag</th>
                        <th className={styles.trendVolume}>Total Tweets</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        trendList.map((trend, index) => {
                            return <tr key={`trend` + index} className={styles.trendListRow}>
                                <td className={styles.th}> <p className={styles.trendRank}>{index + 1}.</p></td>
                                <td className={styles.th}> <p className={styles.trendName}>{trend.name}</p></td>
                                <td className={styles.th}> <p className={styles.trendVolume} data-tip={trend.tweet_volume}>{trend.tweet_volume || "Under 10K"}</p></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <p className={styles.twitterFooterNote}>
                This page shows you <b>recent twitter trending hashtags and topics in Worldwide</b>, This page automatically pull recent most talked <b>trending hashtags &amp; topics in Worldwide</b> every 30 minutes from twitter using official twitter API, so that you can see most recent <b>today's trending hashtags or topics</b> which are trending right now on twitter. People also using todays Worldwide trending hashtags on instagram, youtube, facebook etc social media platform to show their reaction. you can also bookmark this page to get updates about <b>what's trending on twitter in Worldwide</b>
            </p>
            <p className={styles.twitterFooterNote}>
                <h3>How does twitter decide what is trending?</h3>
                <p><p>
                    This page shows you <b>recent twitter trending hashtags and topics in Worldwide</b>, This page automatically pull recent most talked <b>trending hashtags &amp; topics in Worldwide</b> every 30 minutes from twitter using official twitter API, so that you can see most recent <b>today's trending hashtags or topics</b> which are trending right now on twitter. People also using todays Worldwide trending hashtags on instagram, youtube, facebook etc social media platform to show their reaction. you can also bookmark this page to get updates about <b>what's trending on twitter in Worldwide</b>
                </p></p>
            </p>
        </div>
    )
}

export default Twitter;