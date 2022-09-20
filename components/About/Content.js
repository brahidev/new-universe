import { motion } from "framer-motion"
import styles from "./sections.module.css"

const ContentAbout = () => (
    <div className={`w-[100%] flex flex-col overflow-x-hidden ${styles.bgYellow}`}>
        <span className="w-[100%] my-[2rem] text-blue-900 text-center font-bold font-['Sniglet'] text-5xl">New universe Team</span>
        <span className="w-[100%] text-blue-900 text-center font-bold font-['Dosis'] text-2xl">Meet creative team of the New Universe platform</span>
        <div className="flex flex-col md:flex-col my-[2rem] justify-center">
            <div className="flex md:flex-row flex-col justify-center items-center">
                <div>
                    <motion.img
                        animate={{
                        scale: [0.1, 0.4, 0.6, 0.8, 0.9, 1],
                        }}
                        transition={{ ease: "linear", duration: 2 }}
                        className="w-[100%] m-4" 
                        src="https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
                        style={{
                            maxWidth:'295px'
                        }}
                    />
                    <label className="block m-auto w-[80%] text-left text-blue-900 font-bold font-['Sniglet'] text-2xl"> Andres Lugo </label>
                    <label className="block m-auto w-[80%] text-left text-blue-900 font-bold font-['Dosis'] text-1xl"> Full Stack Developer  </label>
                </div>
                <div>
                    <motion.img
                        animate={{
                        scale: [0.1, 0.4, 0.6, 0.8, 0.9, 1],
                        }}
                        transition={{ ease: "linear", duration: 2 }}
                        className="w-[100%] m-4" 
                        src="https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
                        style={{
                            maxWidth:'295px'
                        }}
                    />
                    <label className="block m-auto w-[80%] text-left text-blue-900 font-bold font-['Sniglet'] text-2xl"> Brahian Sanchez </label>
                    <label className="block m-auto w-[80%] text-left text-blue-900 font-bold font-['Dosis'] text-1xl"> Full Stack Developer  </label>
                </div>
                <div>
                    <motion.img
                        animate={{
                        scale: [0.1, 0.4, 0.6, 0.8, 0.9, 1],
                        }}
                        transition={{ ease: "linear", duration: 2 }}
                        className="w-[100%] m-4" 
                        src="https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
                        style={{
                            maxWidth:'295px'
                        }}
                    />
                     <label className="block m-auto w-[80%] text-left text-blue-900 font-bold font-['Sniglet'] text-2xl"> Andres Lugo </label>
                    <label className="block m-auto w-[80%] text-left text-blue-900 font-bold font-['Dosis'] text-1xl"> Full Stack Developer  </label>
                </div>
            </div>
            <div className="flex md:flex-row flex-col justify-center items-center">
                <div>
                    <motion.img
                        animate={{
                        scale: [0.1, 0.4, 0.6, 0.8, 0.9, 1],
                        }}
                        transition={{ ease: "linear", duration: 2 }}
                        className="w-[100%] m-4" 
                        src="https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
                        style={{
                            maxWidth:'295px'
                        }}
                    />
                    <label className="block m-auto w-[80%] text-left text-blue-900 font-bold font-['Sniglet'] text-2xl"> Andres Lugo </label>
                    <label className="block m-auto w-[80%] text-left text-blue-900 font-bold font-['Dosis'] text-1xl"> Full Stack Developer  </label>
                </div>
                <div>
                    <motion.img
                        animate={{
                        scale: [0.1, 0.4, 0.6, 0.8, 0.9, 1],
                        }}
                        transition={{ ease: "linear", duration: 2 }}
                        className="w-[100%] m-4" 
                        src="https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
                        style={{
                            maxWidth:'295px'
                        }}
                    />
                    <label className="block m-auto w-[80%] text-left text-blue-900 font-bold font-['Sniglet'] text-2xl"> Brahian Sanchez </label>
                    <label className="block m-auto w-[80%] text-left text-blue-900 font-bold font-['Dosis'] text-1xl"> Full Stack Developer  </label>
                </div>
                <div>
                    <motion.img
                        animate={{
                        scale: [0.1, 0.4, 0.6, 0.8, 0.9, 1],
                        }}
                        transition={{ ease: "linear", duration: 2 }}
                        className="w-[100%] m-4" 
                        src="https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
                        style={{
                            maxWidth:'295px'
                        }}
                    />
                     <label className="block m-auto w-[80%] text-left text-blue-900 font-bold font-['Sniglet'] text-2xl"> Andres Lugo </label>
                    <label className="block m-auto w-[80%] text-left text-blue-900 font-bold font-['Dosis'] text-1xl"> Full Stack Developer  </label>
                </div>
            </div>
        </div>
    </div>
)

export default ContentAbout