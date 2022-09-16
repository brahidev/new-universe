import { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import { allImages } from "../../../utils/importAllImages"
import Entry from './sections/Entry/entry'
import Login from './sections/Login/login'
import Register from './sections/Register/register'
import Profile from './sections/Profile/profile.js'
import Error from '../../Error/Error'
import { getCookie } from '../../../utils/cookies'

const ModalLogin = ({scrollOn, handleClose})=>{
    const [ isError, setError ] = useState(false)
    const [ listErrorMessage, setErrorMessage ] = useState([])
    const [ isEntry, setIsEntry ] = useState(true)
    const [ isLogin, setIsLogin ] = useState(false)
    const [ isRegister, setIsRegister ] = useState(false)
    const [ isProfile, setProfile] = useState(false)
    const [ isLoged, setIsLoged] = useState(false)

    const closeWindow = () => {
        handleClose()
        scrollOn(true)
    }

    useEffect(() => {
        scrollOn(false)
        let dataUser = getCookie('user')
        if(dataUser && dataUser.length > 0){
            setIsEntry(false)
            setProfile(true)
        }
    })

    return (
        <div className="fixed z-[60] w-[100vw] h-[100vh] bg-[#00000063]">
            <motion.div 
                className="absolute w-[20rem] h-[100vh] right-0 bg-gradient-to-b from-[#FCD555] to-[#FFAE29] overflow-y-auto"
                animate={{
                    x: [200, 190, 180 , 170, 160, 150, 140, 130, 120, 110, 100, 90, 80 , 70, 60, 50, 40, 30, 20, 10, 0],
                }}
                transition={{ ease: "linear", duration: 0.5 }}
                >
                <motion.img
                    animate={{
                        scale:[1.1,1,0.9,1,1.1]
                    }}
                    transition={{ ease: "linear", duration: 3, repeat: Infinity }}
                    src={allImages['closeBtn.png'].default.src}
                    style={{
                        width: '2rem',
                        height: '2rem',
                        right: '1rem',
                        top: '1rem',
                        position: 'absolute',
                        cursor: 'pointer'
                    }}
                    onClick={()=>{setIsLogin(false);setIsRegister(false);closeWindow()}}
                />
                {
                    isEntry ? <Entry setIsLogin={setIsLogin} setIsRegister={setIsRegister} setIsEntry={setIsEntry}/> :
                    isLogin ? <Login setIsLogin={setIsLogin} setIsRegister={setIsRegister} setIsEntry={setIsEntry} setProfile={setProfile} setError={setError} setErrorMessage={setErrorMessage} setIsLoged={setIsLoged}/> : 
                    isRegister ? <Register setIsLogin={setIsLogin} setIsRegister={setIsRegister} setIsEntry={setIsEntry} setProfile={setProfile} setError={setError} setErrorMessage={setErrorMessage}/> : 
                    (isProfile || isLoged) ? <Profile setIsLogin={setIsLogin} setIsRegister={setIsRegister} setIsEntry={setIsEntry} setProfile={setProfile} setError={setError} setErrorMessage={setErrorMessage}/> :
                    null
                }
            </motion.div>
            {isError &&
                <Error
                    listMessages={ listErrorMessage.length === 0 ? ['Todos los campos son obligatorios 🔐'] : listErrorMessage }
                />
            }
        </div>
    )
}

export default ModalLogin