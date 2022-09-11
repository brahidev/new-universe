import { useEffect } from 'react'
import Header from '../components/Head/Header'
import Menu from '../components/Home/Menu/Menu';
import Home from '../components/Home/Home'
import Footer from '../components/Footer/Footer';

const Index = ({ feeds }) => {
  const { data } = feeds

  useEffect(() => {
    document.body.removeAttribute('class')
    document.body.classList.add("landing")
  })

  return (
    <>
      <Header
        text="New Universe"
      />
      <Menu />
      <Home
        feeds={ data }
      />
      <Footer />
    </>
  );
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

export default Index