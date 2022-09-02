import BackdropModal from "../Backdrop/modal";
import { animationsFramer } from "../../utils/effectsFramerMotion";
import { motion } from "framer-motion"
import Image from "next/image";
import Moment from 'react-moment';

const Card = ({ date, description, image, handleClose }) => {
    return (
        <BackdropModal onclick={ handleClose }>
            <motion.div
                onClick={ (e) => e.stopPropagation() }
                className="h-auto m-auto p-10 rounded-lg flex flex-col items-center shadow-lg shadow-indigo-500/40 bg-white w-[50%]"
                variants={ animationsFramer.dropFromUp }
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="translate-y-[-90%] w-[100%] absolute">
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.1 }}
                        className="btnBlue mx-auto"
                        onClick={ handleClose }
                    >
                        <p className="py-[0 !important] px-0">
                            See All News
                        </p>
                    </motion.a>
                </div>
                <div className="text-left text-xs mt-3 text-blue-900 font-titleLato pb-4">
                    <p>
                        <Moment format="D MMM YYYY" withTitle>
                            { date }
                        </Moment>
                    </p>
                </div>
                <div>
                    <Image
                        src={ image }
                        alt="Picture of the author"
                        width={800}
                        height={400}
                        style={{ borderRadius: '0.5rem' }}
                    />
                </div>
                <div className="mt-3 text-left text-blue-900 font-titleBold">
                    <a>
                        { description }
                    </a>
                </div>
            </motion.div>
        </BackdropModal>
    )
}

export default Card