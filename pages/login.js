import { useEffect } from 'react'

import Header from '../components/Head/Header'
import Login from '../components/Login/index'

const Home = () => {
    useEffect(() => {
        document.body.classList.add("home")
    })

    return (
        <div className='container mx-auto'>
        <Header
            text="New Universe"
        />
        <Login />
        </div>
    );
}

export default Home