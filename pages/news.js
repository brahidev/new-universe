import { useEffect } from 'react'

import Header from '../components/Head/Header'
import HomeMenu from '../components/Home/Menu/HomeMenu';
import HomeNews from '../components/News/home';

const NewsPage = ({ feeds }) => {
    const { data } = feeds

    useEffect(() => {
        document.body.removeAttribute('class')
        document.body.classList.add("landing")
    })

    return (
        <>
            <Header
                text="News"
            />
            <HomeMenu />
            <HomeNews
                feeds={ data }
            />
        </>
    )
}

export async function getServerSideProps() {
    // Fetch data
    const URL = `${ process.env.HOST }/api/feeds`
    const feed = await fetch(URL)
    const feedJSON = await feed.json()

    if (feedJSON.state != 200) {
        console.error('Error in Query to Feed')
    }

    return {
        props: {
            feeds: feedJSON.data
        }
    }
}

export default NewsPage