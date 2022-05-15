import React from 'react';
import Head from 'next/head'
import Image from 'next/image';

import styles from '../styles/Stocks.module.css'

function Stocks(props) {
    return (
        <div>
            <Head>
                <title>Stocks | Top Trending Things</title>
                <meta name="description" content="Top Trending Stocks to buy today " />
            </Head>
            <Image
                src="/stocks.jpg"
                alt="Top Stocks to buy today"
                width={1024}
                height={500}
                objectFit="cover"
            />
            <h2>Top Stocks to Buy Short Term (1 Day to 1 Month)</h2>
            <br />
            <div className={styles.stockContainer}>
                <h3>Buy <strong><a href="https://www.google.com/finance/quote/HAVELLS:NSE?sa=X&ved=2ahUKEwiw14zHja3xAhXu73MBHSqYDWAQ_AUoAXoECAEQAw" target="_blank">
                    Havells India Ltd.</a></strong> at target price of 1010</h3>
                <br />
                <p>Currently Havells India Ltd. stocks are 87.8% away from 52 week low and 17.77% away from 52 week high.</p>
                <p>Given that Havells India Ltd. Shares touched 1215.85 and the current price is 1017.90 it can provide 5-10% return in a month's time.</p>
                <p>It indicates Average Financials which asure your money is not on risk.</p>
                <p>Number of MF & FII Investment has increased in March 2021 qtr.</p>
            </div>
            <br />
            <div className={styles.stockContainer}>
                <h3>Buy <strong><a href="https://www.moneycontrol.com/india/stockpricequote/finance-nbfc/mahindramahindrafinancialservices/MMF04" target="_blank">
                    Mahindra & Mahindra Financial Services Ltd.</a></strong> at target price of 170</h3>
                <br />
                <p>Currently 52.22% away from 52 week low & 28.51% away from 52 week high</p>
                <p>Despite having a Bearish nature M&MFin is at its dip right now. it is the best time to buy and can return 5% in months time.</p>
                <p>It saw Growth in Net Profit with increasing Profit Margin (QoQ)</p>
                <p>Institutional Investment has increased in March 2021 qtr.</p>
            </div>

            <p className={styles.footerNote}>
                This page shows you <b>recent top and trending stocks in India</b>, On this website you will find the most <b>trending and hot stocks in India</b>. The stock recommedation list is updated every week (7 days) using personal research and analysis, we work hard on our research to find the <b>best and most popular trending stocks to buy</b>. People use this to get guidance from this page. You can also bookmark this page to get updates about <b>what's the most trending stocks in India</b>
            </p>
            <p className={styles.footerNote}>
                <h3>How do we decide which stocks to pick?</h3>
                <p><p>
                    This page shows you recommendation of stocks based on <b> analysis and research of our experts</b>. TopTrendingThings.in advises users to check with certified experts before taking any investment decision. However, TopTrendingThings.in does not guarantee the accuracy, adequacy or completeness of any information and is not responsible for any errors or omissions or for the results obtained from the use of such information. The information on this website is updated from time to time. TopTrendingThings.in however excludes any warranties (whether expressed or implied), as to the quality, accuracy, efficacy, completeness, performance, fitness or any of the contents of the website.
                </p></p>
            </p>
        </div >
    );
}

export default Stocks;