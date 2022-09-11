import { useEffect, useState } from 'react'

import Header from '../components/Head/Header'
import HomeMenu from '../components/Home/Menu/HomeMenu';
import Home from '../components/Home/'


const Index = ({ feeds }) => {
  const { data } = feeds

  useEffect(() => {
    document.body.removeAttribute('class')
    document.body.classList.add("landing")
  })

  const scrollOn = (active)=>{
    active? document.body.style.overflowY = "scroll" : document.body.style.overflowY = "hidden"
  }

  return (
    <div className="">
      <Header
        text="New Universe"
      />
      <HomeMenu scrollOn={scrollOn}/>
      <Home
        feeds={ data }
      />
    </div>
  );
}

export async function getServerSideProps(req, resp) {
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

export default Index