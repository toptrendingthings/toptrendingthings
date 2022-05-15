import Head from 'next/head';

const About = () => {
    return (
        <div>
            <Head>
                <title>About | Top Trending Things</title>
                <meta name="description" content="About Top Trending Things" />
            </Head>
            <h2>About</h2>
            <p>Hello, I am a passionate software engineer who believes in building and occasionally designing exceptional digital experience. I Enjoy creating things that live on the internet. I had priviledge of working with a start-up & a huge corporation. This website has been created with NEXTJS.</p>
            <br />
            <br />
            <h3>Utility List</h3>
            <p><strong>Twitter Trends:</strong> <br /><span>You can view the latest twitter trends on the TopTrendingThings.in. Everytime you refresh the page it fetches the latest twitter trends from the Twitter API. The memory retaintion limit is 15 mins.</span></p>
        </div>

    )
}

export default About