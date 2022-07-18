import { useEffect } from 'react';
import Header from '../components/Head/Header'

const Home = () => {
  useEffect(() => {
    document.body.classList.add("home")
  })

  return (
    <div>
      <Header
        text="New Universe"
      />
    </div>
  );
}

export default Home