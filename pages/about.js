import { useEffect } from 'react'
import Header from "../components/Head/Header"
import HomeMenu from '../components/Home/Menu/Menu';
import HomeAbout from '../components/About/Home';

const About = () => {

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
                text="About"
            />
            <HomeMenu scrollOn={scrollOn}/>
            <HomeAbout />
        </>
    )
}

export default About