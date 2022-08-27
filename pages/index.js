import Header from '../components/Head/Header'
import HomeMenu from '../components/Home/Menu/HomeMenu';
import Home from '../components/Home/'

const Index = () => {
  return (
    <div className=''>
      <Header
        text="New Universe"
      />
      <HomeMenu />
      <Home />
    </div>
  );
}

export default Index