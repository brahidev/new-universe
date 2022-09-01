import {motion, animatePresence} from "framer-motion"
import Link from 'next/link'
import Title from "../Title"
import News from "./News/news"
import YoutubeEmbed from "./News/youtube"
import Separator from "../Separator/Separator"
//import Images from '../../../public/images'
import { allImages } from "../../../utils/importAllImages"
import styles from "./sections.module.css"

const Principal = () => {
    return (
        <>
            <div className={`flex min-h-[650px] relative flex-row justify-center overflow-hidden`}>
                <div className={`${styles.bg_spiral_container}`}>
                    <div className={`${styles.bg_spiral} ${styles.bg_spiral_final}`}></div>
                    <div className={`${styles.bg_spiral} ${styles.bg_spiral_powerful}`}></div>
                    <div className={`${styles.bg_spiral} ${styles.bg_spiral_puffy}`}></div>
                    <div className={`${styles.bg_spiral} ${styles.bg_spiral_pink}}`}></div>
                </div>
                <div className={`${styles.hero_spiral} md:w-[100%] flex justify-center overflow-hidden`}>
                    <div className={`backgroundSpiral ${styles.backgroundSpiral}`}></div>
                </div>
                <div className="w-[100%] flex mt-[35%] md:mt-[5%] flex-col md:flex-row">
                    <div className="w-[100%] md:w-[40%] md:px-[5%] flex flex-col justify-center items-center z-10">
                        <span className="text-blue-900 font-bold font-titleExtraBold text-3xl">New Universe Plataform</span>
                        <span className="text-blue-900 text-center mt-[1rem] font-bold font-titleNormal text-2xl">
                            The New Universe Plataform allows to make very easy for people of all 
                            ages to quickly create and share games in the platform as easy as any 
                            social network.
                        </span>
                        <span className="text-blue-900 text-center mt-[1rem] font-bold font-titleNormal text-2xl">
                            When others play the games the creators receive direct payment without 
                            an intermediary thanks to the new Web monetization system we use.
                        </span>
                    </div>
                    <div className="w-[100%] md:w-[60%] flex mt-[15rem] md:mt-[12rem] relative flex-col items-center z-10">
                        <motion.div
                                animate={{
                                    y: [0, 10, 20 , 10, 0],
                                    rotate: [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0],
                                }}
                                transition={{ ease: "linear", delay: 3, duration: 2, repeat: Infinity }}
                                className="w-[100%] h-[100%] z-20"
                            >
                            <motion.img
                                animate={{
                                    scale: [0.1, 0.4, 0.6, 0.8, 0.9, 1],
                                    y:[-150, -120, -80, -40, -20, 0]
                                }}
                                transition={{ ease: "linear", duration: 2 }}
                                className={`${styles.kirby} w-[50%] md:w-[25rem]`} 
                                src={allImages['Froggy_Hi-2.png'].default.src}
                            >
                            </motion.img>
                        </motion.div>
                        <motion.div
                                animate={{
                                    rotate: [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0],
                                }}
                                transition={{ ease: "linear", delay: 3, duration: 2, repeat: Infinity }}
                                className={`${styles.metaknight} w-[50%] md:w-[18rem]`}
                            >
                            <motion.img
                                animate={{
                                scale: [0.1, 0.4, 0.6, 0.8, 0.9, 1],
                                }}
                                transition={{ ease: "linear", duration: 2 }}
                                className="w-[100%]" 
                                src={allImages["Pig.png"].default.src}
                            >
                            </motion.img>
                        </motion.div>
                        <motion.div
                                animate={{
                                    rotate: [0, -1, -2, -3, -4, -5, -4, -3, -2, -1, 0],
                                }}
                                transition={{ ease: "linear", delay: 3, duration: 2, repeat: Infinity }}
                                className={`${styles.dedede} w-[50%] md:w-[16rem]`}
                            >
                            <motion.img
                                animate={{
                                    scale: [0.1, 0.4, 0.6, 0.8, 0.9, 1],
                                }}
                                transition={{ ease: "linear", duration: 2 }}
                                className={`w-[100%]`} src={allImages["PXX_2x.png"].default.src}
                            >
                            </motion.img>
                        </motion.div>
                        <motion.div
                                animate={{
                                    rotate: [0, -1, -2, -3, -4, -5, -4, -3, -2, -1, 0],
                                }}
                                transition={{ ease: "linear", delay: 3, duration: 2, repeat: Infinity }}
                                className={`${styles.waddledee} w-[50%] md:w-[8rem]`}
                            >
                            <motion.img
                                animate={{
                                    scale: [0.1, 0.4, 0.6, 0.8, 0.9, 1],
                                }}
                                transition={{ ease: "linear", duration: 2 }}
                                className={`w-[100%]`} src={allImages["Paw-single-blue.png"].default.src}
                            >
                            </motion.img>
                        </motion.div>
                    </div>
                </div>
            </div>
            <Separator
                position="relative z-50 bg-inherit pt-8 my-[-1rem]"
            />
            <div className="flex flex-col md:flex-row md:justify-center md:pl-24 md:pr-24 md:pt-[5rem] md:pb-[8rem] bg-sky bg-no-repeat bg-inherit h-auto pb-16">
                <div className="flex justify-center md:relative md:left-12 md:justify-start md:pt-0 md:mb-10 pt-36 mb-[-2rem] z-10">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2 }}
                        width="100%"
                        className=" min-w-[315px]"
                        src={allImages['chikenbear.png'].default.src} 
                    />
                </div>
                <div className="bg-white md:flex md:h-[min-content] md:mt-10 md:items-center md:align-middle md:pt-0 mb-0 flex-col pt-5 mr-5 ml-5 rounded-2xl z-0">
                    <div className="ml-10 mr-10 text-center mt-[2rem] text-blue-900 text-lg pb-5 md:hover:text-blue-900 md:p-0">
                        <span className="text-blue-900 font-['Sniglet'] text-3xl">
                            New Universe Plataform
                        </span>
                        <p className="text-blue-900 text-center mt-[1rem] mx-[15%] font-bold font-titleNormal text-2xl">
                            Allows you to create and enjoy making your games without programming. 
                            And you can also earn money for you creations using the new web monetización system.
                            Be part of our beta tester program.
                        </p>
                    </div>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.1 }}
                        className="btnRed"
                    >
                        <span>
                            Sign Up Here
                        </span>
                    </motion.a>
                </div>
            </div>
            <Separator
                position="relative bg-inherit z-50 pt-8 my-[-1rem]"
            />
            <News />
            <Separator
                position="relative bg-inherit z-50 pt-8 my-[-1rem]"
            />
            <div className="bg-[#ffec40] w-[100%]">
                <div className="w-[100%] bg-stars-white flex flex-col items-center">
                    <YoutubeEmbed embedId="rokGy0huYEA" />
                    <span className="text-blue-900 font-['Sniglet'] text-3xl">
                        New Universe Plataform
                    </span>
                    <span className="text-blue-900 text-center mt-[1rem] mb-[2rem] mx-[15%] font-bold font-titleNormal text-1xl">
                        Join New Universe an unforgettable experience creating your games!
                    </span>
                </div>
            </div>
            <Separator
                position="relative bg-inherit z-50 pt-8 my-[-1rem]"
            />
            <div className="h-[4.4rem] bg-gradient-to-b from-[#FCD555] to-[#FFAE29] overflow-hidden">
                <div className="w-[100%] h-[100%] bg-red-footprint bg-contain opacity-70">
                </div>
                <div className="h-[4.4rem] bg-footer-bg bg-contain bg-repeat mt-[-3rem] z-50 cloudAnimation">
                </div>
            </div>
            
        </>
    )
}

export default Principal