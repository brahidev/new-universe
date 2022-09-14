import styles from "./sections.module.css"
import { allImages } from "../../utils/importAllImages"

import { motion } from "framer-motion"

const Instructions = () => {
    return(
        <div className={`w-[99vw] flex flex-col overflow-x-hidden ${styles.bgYellow}`}>
            <span className="w-[100%] my-[2rem] text-blue-900 text-center font-bold font-['Sniglet'] text-5xl">Instructions to download Froggy</span>
            <span className="w-[100%] text-blue-900 text-center font-bold font-['Sniglet'] text-5xl">Stickers</span>
            <div className="flex flex-col md:flex-row my-[2rem] justify-center">
                <motion.img
                    animate={{
                    scale: [0.1, 0.4, 0.6, 0.8, 0.9, 1],
                    }}
                    transition={{ ease: "linear", duration: 2 }}
                    className="w-[100%]" 
                    src={allImages["NewUniverse_App.png"].default.src}
                    style={{
                        maxWidth:'495px'
                    }}
                />
                <div className="flex flex-col">
                    <span className="w-[100%] text-blue-900 text-center font-bold font-['Sniglet'] text-5xl">Step 1</span>
                    <p className="text-blue-900 text-center mt-[1rem] font-bold font-titleNormal text-2xl">
                        Download Sticker Maker of Google Play for Android
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.1 }}
                        className="btnBlueLogin"
                        style={{
                            fontSize: '100%',
                            width: '21rem'
                        }}
                    >
                        <span>
                            Go to Sticker Maker for Android
                        </span>
                    </motion.button>
                    <p className="text-blue-900 text-center mt-[1rem] font-bold font-titleNormal text-2xl">
                        Download Sticker Maker in App Store
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.1 }}
                        className="btnBlueLogin"
                        style={{
                            fontSize: '100%',
                            width: '21em'
                        }}
                    >
                        <span>
                            Go to Sticker Maker for Apple
                        </span>
                    </motion.button>
                </div>
            </div>
            <div className="flex md:flex-row flex-col my-[2rem] justify-center">
                <motion.img
                    animate={{
                    scale: [0.1, 0.4, 0.6, 0.8, 0.9, 1],
                    }}
                    transition={{ ease: "linear", duration: 2 }}
                    className="w-[100%]" 
                    src={allImages["characters-kirby.png"].default.src}
                    style={{
                        maxWidth:'495px'
                    }}
                />
                <div className="flex flex-col">
                    <span className="w-[100%] text-blue-900 text-center font-bold font-['Sniglet'] text-5xl">Step 1</span>
                    <p className="text-blue-900 text-center mt-[1rem] font-bold font-titleNormal text-2xl">
                        Download Froggy Sticker in this link
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.1 }}
                        className="btnBlueLogin"
                        style={{
                            fontSize: '100%',
                            width: '21rem'
                        }}
                    >
                        <span>
                            Froggy Sticker 
                        </span>
                    </motion.button>
                </div>
            </div>
            <div className="flex md:flex-row flex-col my-[2rem] justify-center">
                <motion.img
                    animate={{
                    scale: [0.1, 0.4, 0.6, 0.8, 0.9, 1],
                    }}
                    transition={{ ease: "linear", duration: 2 }}
                    className="w-[100%]" 
                    src={allImages["Stickers_1x.png"].default.src}
                    style={{
                        maxWidth:'495px'
                    }}
                />
                <div className="flex flex-col mb-[5rem]">
                    <span className="w-[100%] text-blue-900 text-center font-bold font-['Sniglet'] text-5xl">Step 3</span>
                    <p className="text-blue-900 text-center mt-[1rem] font-bold font-titleNormal text-2xl">
                        Adding Froggy Sticker to Whatsapp
                    </p>
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
}

export default Instructions