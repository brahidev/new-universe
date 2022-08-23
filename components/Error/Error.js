import { motion, AnimatePresence } from 'framer-motion';

const Error = ({ message }) => (
    <>
        <ul>
            <AnimatePresence initial={false} exitBeforeEnter={ true }
                onExitComplete={ () => null }>
                {
                    <motion.li
                        key={ Math.random() }
                        positionTransition
                        initial={{ opacity: 0, y: 50, scale: 0.3 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                        className="bg-indigo-700 shadow-lg shadow-indigo-500/40"
                    >
                        <div className="flex justify-center items-center align-middle pt-5 text-white italic">
                            <p> { message } </p>
                        </div>
                    </motion.li>
                }
            </AnimatePresence>
        </ul>
    </>
)

export default Error