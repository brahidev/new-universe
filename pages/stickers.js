import { useEffect } from 'react'

import Header from '../components/Head/Header'
import HomeMenu from '../components/Home/Menu/Menu';
import HomeStickers from '../components/Stickers/home';

const StickersPage = () => {

    const scrollOn = (active)=>{
        active? document.body.style.overflowY = "scroll" : document.body.style.overflowY = "hidden"
    }
    
    useEffect(() => {
        document.body.removeAttribute('class')
        document.body.classList.add("landing")
    })

    return (
        <>
            <Header
                text="Stickers"
            />
            <HomeMenu scrollOn={scrollOn}/>
            <HomeStickers />
        </>
    )
}

export default StickersPage
