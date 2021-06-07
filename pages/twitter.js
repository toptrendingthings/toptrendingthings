import styles from '../styles/Twitter.module.css'

import { useEffect, useState } from 'react';
import Head from 'next/head'
import WOEID_LIST from '../lib/woeid.json';

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
    const [trendList, setTrendList] = useState((data[0] || {}).trends);
    const [placeInput, setPlaceInput] = useState("Worldwide")
    const [place, setPlace] = useState(WOEID_LIST[0])

    const filterCountryList = (searchQuery) => {
        let list = [];
        const topCountries = ["United States", "India", "Japan", "Brazil", "Indonesia", "Mexico", "Philippines", "Saudi Arabia"];
        if (!searchQuery) {
            list = WOEID_LIST.filter(woed => topCountries.indexOf(woed.name) > -1);
        }
        if (searchQuery) {
            list = WOEID_LIST.filter(woed => woed.name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1).reverse();
        }
        return list;
    };

    const fetchTrends = async (place) => {
        const URL = `https://top-trend.herokuapp.com/twitter/topTrends?id=${place.woeid}`
        const response = await fetch(URL);
        const data = await response.json();
        if (data && data[0].trends) setTrendList(data[0].trends);
    }

    useEffect(() => {
        fetchTrends(place);
        setPlaceInput(place.name)
    }, [place]);

    return (
        <div>
            <Head>
                <title>Twitter | {place.name} | Top Trending Things</title>
                <meta name="description" content="Top Trending Twitter Hastags" />
            </Head>
            <h2>Twitter Trends Now</h2>
            <h3>Top Trending Twitter <input
                className={styles.locationInput}
                value={placeInput}
                onChange={(e) => { setPlaceInput(e.target.value) }}></input></h3>
            <div className={styles.countryFilterWrapper}>
                {filterCountryList(placeInput).map(_place => {
                    return <div className={styles.countryFilterItem} key={_place.woeid} onClick={() => { setPlace(_place) }}>{_place.name}</div>;
                })}
            </div>
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