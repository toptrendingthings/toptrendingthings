import React from 'react';
import Head from 'next/head'

import styles from '../styles/Stocks.module.css'

function Stocks(props) {
    return (
        <div>
            <Head>
                <title>Stocks | Top Trending Things</title>
                <meta name="description" content="Stocks to buy today " />
            </Head>
            <h2>Top Stocks to Buy Short Term (1 Day to 1 Month)</h2>
            <br />
            <div className={styles.stockContainer}>
                <h3>Buy <strong><a href="https://www.moneycontrol.com/india/stockpricequote/electric-equipment/havellsindia/HI01" target="_blank">
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
        </div >
    );
}

export default Stocks;