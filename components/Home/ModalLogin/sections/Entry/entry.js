import {motion} from "framer-motion"
import {allImages} from "../../../../../utils/importAllImages"
import Link from 'next/link'
import Extern from '../Extern'

const Entry = ({setIsLogin, setIsRegister, setIsEntry}) => {

    const showLogin = ()=>{
        setIsLogin(true);
        setIsEntry(false)
    }

    const showRegister = ()=>{
        setIsRegister(true);
        setIsEntry(false)
    }

    return(
        <>
            <div className="bg-white w-[15rem] flex flex-col justify-center mx-[auto] mt-[4rem] px-[2rem] rounded-[1rem]">
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    src={allImages['NewUniverseLogo.png'].default.src}
                    style={{
                        width: '5rem',
                        height: '5rem',
                        position: 'relative',
                        margin: 'auto' 
                    }}
                />
                <span className="text-white stroke-1 text-center whitespace-pre-line borderTextBlue font-['Sniglet'] text-3xl">New universe</span>
            </div>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
                className="btnBlueLogin"
                style={{
                    marginTop: '20%',
                    fontSize: '100%',
                    width: '12rem'
                }}
                onClick={()=>{showLogin()}}
            >
                <span>
                    Login
                </span>
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
                className="btnRed"
                style={{
                    marginButton: '20%',
                    fontSize: '100%',
                    width: '12rem'
                }}
                onClick={()=>{showRegister()}}
            >
                <span>
                    Register
                </span>
            </motion.button>
            <Extern/>
        </>
    )
}

export default Entry