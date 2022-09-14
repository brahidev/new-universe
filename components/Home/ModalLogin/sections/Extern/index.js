import {motion} from "framer-motion"
import Link from 'next/link'

const Extern = () => {return (
    <div className="bg-[#fff9c8] w-[15rem] flex flex-col justify-center mx-[auto] mb-[1rem] mt-[4rem] px-[2rem] rounded-[1rem]">
        <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            className="btnPinkLogin"
            style={{
                marginTop: '20%',
                fontSize: '15px',
                width: '12rem'
            }}
            href="https://coil.com/"
        >
            <span>
                Go to Coil
            </span>
        </motion.a>
        <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            className="btnGreenLogin"
            style={{
                marginButton: '20%',
                fontSize: '100%',
                whiteSpace: 'pre',
                width: '12rem'
            }}
            href="https://webmonetization.org/"
        >
            <span>
                About Web Monetizacion
            </span>
        </motion.a>
        <Link href="/" >
            <span className="text-[#3c5cf0] cursor-pointer border-b-2 border-[#3c5cf0] mx-[1rem] text-center font-bold font-titleNormal text-1x1">Terms of Service</span>
        </Link>
        <Link href="/">
            <span className="text-[#3c5cf0] cursor-pointer border-b-2 border-[#3c5cf0] mx-[1rem] my-[1rem] text-center font-bold font-titleNormal text-1xl">Privacy Policy</span>
        </Link>
    </div>
)}

export default Extern