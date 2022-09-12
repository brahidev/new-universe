import { useEffect } from 'react'

import Header from '../components/Head/Header'
import Menu from '../components/Home/Menu/Menu';
import HomeNews from '../components/News/home';

const NewsPage = ({ feeds }) => {
    const { data } = feeds

    useEffect(() => {
        document.body.removeAttribute('class')
        document.body.classList.add("landing")
    })

    const scrollOn = (active)=>{
        active? document.body.style.overflowY = "scroll" : document.body.style.overflowY = "hidden"
    }

    return (
        <>
            <Header
                text="News"
            />
            <Menu
                scrollOn={ scrollOn }
            />
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