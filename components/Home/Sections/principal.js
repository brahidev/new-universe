import {motion, animatePresence} from "framer-motion"
import Title from "../Title"
import News from "./News/news"
import Separator from "../Separator/Separator"
//import Images from '../../../public/images'
import { allImages } from "../../../utils/importAllImages"
import styles from "./sections.module.css"

const Principal = ({ feeds }) => {
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
                            The New Universe Plataform allows to make very easy for people of all 
                            ages to quickly create and share games in the platform as easy as any 
                            social network.
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
            <div className="flex flex-col md:flex-row md:justify-center md:pl-24 md:pr-24 md:pt-20 bg-anniversaryKirby bg-no-repeat bg-inherit h-auto pb-16">
                <div className="flex justify-center md:relative md:left-12 md:justify-start md:pt-0 md:mb-10 pt-36 mb-[-2rem] z-10">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        width="300"
                        height="300"
                        src="https://kirby.nintendo.com/assets/img/kirby_30.png"
                    />
                </div>
                <div className="bg-white md:flex md:h-[15rem] md:mt-10 md:items-center md:align-middle md:pt-0 mb-0 pt-5 mr-5 ml-5 rounded-2xl z-0">
                    <div className="ml-10 mr-10 text-center text-blue-900 text-lg pb-5 md:hover:text-blue-900 md:p-0">
                        <Title
                            title="30 years of Kirby! "
                        />
                        <p>
                            Enjoy the 30th anniversary of everyone’s favorite puffball with this free digital wallpaper.
                        </p>
                    </div>
                </div>
            </div>
            <Separator
                position="relative bg-inherit z-50 pt-8 my-[-1rem]"
            />
            <News
                feeds={ feeds }
            />
            <Separator
                position="relative bg-inherit z-50 pt-8 my-[-1rem]"
            />
        </>
    )
}

export default Principal