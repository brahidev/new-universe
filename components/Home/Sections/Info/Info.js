import { motion } from "framer-motion"
import { allImages } from "../../../../utils/importAllImages"
import Separator from "../../../Separator/Separator"

const Info = () => (
    <>
        <div className="flex flex-col md:flex-row md:justify-center md:pl-24 md:pr-24 md:pt-[5rem] md:pb-[8rem] bg-sky bg-no-repeat bg-inherit h-auto pb-16">
            <div className="flex justify-center md:relative md:left-12 md:justify-start md:pt-0 md:mb-10 pt-[5%] mb-[-2rem] z-10">
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
    </>
)

export default Info