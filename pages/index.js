import Header from '../components/Head/Header'
import HomeMenu from '../components/Home/Menu/HomeMenu';
import Home from '../components/Home/'

const Index = () => {
  return (
    <div className='top-[1rem] right-[1rem] block fixed'>
      <Header
        text="New Universe"
      />
      <HomeMenu />
      <Home />
    </>
  );
}

export default Index