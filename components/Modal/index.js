import { motion } from "framer-motion"
import Backdrop from "../Backdrop"

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 100,
            stiffness: 500
        }
    },
    exit: {
        y: "100vh",
        opacity: 0
    }
}

const Modal = ({ handleClose, content }) => {
    return (
        <Backdrop onclick={ handleClose }>
            <motion.div
                onClick={ (e) => e.stopPropagation() }
                className="w-1/3 h-auto m-auto p-10 rounded-lg flex flex-col items-center shadow-lg shadow-indigo-500/40 bg-neutral-200"
                variants={ dropIn }
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="flex flex-col">
                    <div className="pb-5">
                        <motion.input
                        type="text"
                        placeholder="Username"
                        className="p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        />
                    </div>
                    <div className="pb-5">
                        <motion.input
                        type="password"
                        placeholder="Password"
                        className="p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        />
                    </div>
                    <div className="pb-5">
                        <motion.input
                        type="email"
                        placeholder="Email"
                        className="p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        />
                    </div>
                    <div className="pb-5">
                        <motion.input
                        type="text"
                        placeholder="Age"
                        className="p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-center pt-5">
                    <div className="mr-2">
                        <motion.button
                        className="p-2 w-20 italic text-center text-white rounded-lg shadow-lg border-solid border-2 border-indigo-700 bg-indigo-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        >
                            Send
                        </motion.button>
                    </div>
                    <div>
                        <motion.button
                        className="p-2 w-20 italic text-center text-white rounded-lg shadow-lg border-solid border-2 border-indigo-700 bg-indigo-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleClose}
                        >
                            Close
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </Backdrop>
    )
}

export default Modal