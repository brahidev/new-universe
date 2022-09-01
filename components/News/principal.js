import styles from "./sections.module.css"
import { allImages } from "../../utils/importAllImages"

import { motion } from "framer-motion"

const PrincipalNews = () => {
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
                        <span className="text-blue-900 font-bold font-titleExtraBold text-3xl">News</span>
                        <span className="text-blue-900 text-center mt-[1rem] font-bold font-titleNormal text-2xl">
                            Check out all the latest news about New Universe!
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
        </>
    )
}

export default PrincipalNews