import { motion } from 'framer-motion'
import { allImages } from "../../../../utils/importAllImages";
import Link from 'next/link'
import Separator from '../../../Separator/Separator'

const Stickers = ()=>{
    return(
        <>
            <div className="flex flex-col md:pl-24 md:pr-24 md:pt-20 bg-stickers bg-cover bg-no-repeat bg-inherit h-auto pb-16">
                <span className="text-white my-[1rem] text-center font-['Sniglet'] text-4xl">Express yourself with Froggy in your Whatsapp messages</span>
                <div className='md:max-w-[50%] max-w-[80%] mx-auto py-[3rem] bg-white rounded-[1rem]'>
                    <div>
                        <motion.img
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2 }}
                            width="80%"
                            src={allImages["kirby_fighters.jpg"].default.src}
                            style={{ marginInline: 'auto'}}
                        />
                        <span className="block mt-[1rem] text-blue-900 text-center font-bold font-titleExtraBold text-2xl">Download now the new Froggy stickers, a character on the platform, follow these steps to install them on your WhatsApp</span>
                    </div>
                </div>
                <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex justify-center items-center m-5"
                        >
                            <Link href="/news">
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.1 }}
                                    className="btnBlue"
                                >
                                        <span>
                                            See intructions
                                        </span>
                                </motion.a>
                            </Link>
                </motion.div>
            </div>
            <Separator
                position="relative bg-inherit z-50 pt-8 my-[-1rem]"
            />
        </>
    )
}

export default Stickers
