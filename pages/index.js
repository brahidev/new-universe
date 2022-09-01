import { useEffect } from 'react'

import Header from '../components/Head/Header'
import HomeMenu from '../components/Home/Menu/HomeMenu';
import Home from '../components/Home/'


const Index = ({ feeds }) => {
  const { data } = feeds

  useEffect(() => {
    document.body.removeAttribute('class')
    document.body.classList.add("landing")
  })

  return (
    <div className=''>
      <Header
        text="New Universe"
      />
      <HomeMenu />
      <Home
        feeds={ data }
      />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data
  const URL = 'http://localhost:3000/api/feeds'
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

export default Index