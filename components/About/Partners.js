import { motion } from "framer-motion"
import styles from "./sections.module.css"

const PartersAbout = () => (
    <div className={`w-[100%] flex flex-col overflow-x-hidden ${styles.bgYellow}`}>
        <span className="w-[100%] my-[2rem] text-blue-900 text-center font-bold font-['Sniglet'] text-5xl">Our Partners</span>
        <div className="flex flex-row justify-center items-center">
            <div className="bg-white rounded-xl m-1">
                <motion.img
                        animate={{
                        scale: [0.1, 0.4, 0.6, 0.8, 0.9, 1],
                        }}
                        transition={{ ease: "linear", duration: 2 }}
                        className="w-[100%] m-4" 
                        src="https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
                        style={{
                            maxWidth:'195px'
                        }}
                    />
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.1 }}
                        className="btnBlue"
                        style={{
                            width: '5rem',
                            right: '2rem',
                            position: 'absolute',
                            fontSize: '1rem',
                        }}
                    > See more information </motion.button>
        </div>
            <div className="bg-white rounded-xl m-1">
                <motion.img
                        animate={{
                        scale: [0.1, 0.4, 0.6, 0.8, 0.9, 1],
                        }}
                        transition={{ ease: "linear", duration: 2 }}
                        className="w-[100%] m-4" 
                        src="https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
                        style={{
                            maxWidth:'195px'
                        }}
                    />
            </div>
            <div className="bg-white rounded-xl m-1">
                <motion.img
                        animate={{
                        scale: [0.1, 0.4, 0.6, 0.8, 0.9, 1],
                        }}
                        transition={{ ease: "linear", duration: 2 }}
                        className="w-[100%] m-4" 
                        src="https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
                        style={{
                            maxWidth:'195px'
                        }}
                    />
            </div>
        </div>
        <div className="h-[2rem] bg-footer-bg bg-auto bg-repeat mt-[3rem] z-40 cloudAnimation"></div>
        <div className="w-[100%] relative flex flex-col text-center bg-[#f6f7ff] z-50">
            <p>Creators</p>
            <p>© New Universe Team</p>
            <p>Game trademarks and copyrights are properties of their respective owners. New Universe Team. © <span className="cpdate">2022</span> New Universer.</p>
            <br/>
        </div>
    </div>
)

export default PartersAbout