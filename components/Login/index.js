import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../Modal/register';

const Login = () => {

    const [modalOpen, setModalOpen] = useState(false)

    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)

    return (
        <>
            <div
                className="flex flex-col"
            >
                <div className="pb-5">
                    <motion.input
                        type="text"
                        placeholder="Username"
                        className="p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    />
                </div>
                <div>
                    <motion.input
                        type="password"
                        placeholder="Password"
                        className="p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    />
                </div>
            </div>
            <div
                className="flex flex-row justify-center pt-5"
            >
                <div className="mr-2">
                    <motion.button
                        className="p-2 w-20 italic text-center text-white rounded-lg shadow-lg border-solid border-2 border-indigo-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Login
                    </motion.button>
                </div>
                <div>
                    <motion.button
                        className="p-2 w-20 italic text-center text-white rounded-lg shadow-lg border-solid border-2 border-indigo-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={ () => (modalOpen ? close() : open()) }
                    >
                        Register
                    </motion.button>
                </div>
            </div>

            <AnimatePresence
                initial={ false }
                exitBeforeEnter={ true }
                onExitComplete={ () => null }
            >
                { modalOpen && <Modal modalOpen={ modalOpen } handleClose={ close } /> }
            </AnimatePresence>
        </>
    )
}

export default Login