import { motion, AnimatePresence } from 'framer-motion';

const Error = ({ message }) => (
    <>
        <ul className="fixed bottom-0 right-0 top-[90vh] flex flex-col justify-end ">
            <AnimatePresence initial={false} exitBeforeEnter={ true }
                onExitComplete={ () => null }>
                {
                    <motion.li
                        key={ Math.random() }
                        positionTransition
                        initial={{ opacity: 0, y: 50, scale: 0.3 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                        className=" bg-indigo-700 shadow-lg shadow-indigo-500/40 p-0 w-80 m-3 flex grow-0 shrink-0 basis-24 relative rounded-xl"
                    >
                        <div className="flex justify-center m-6 items-center text-white italic">
                            <p> { message } </p>
                        </div>
                    </motion.li>
                }
            </AnimatePresence>
        </ul>
    </>
)

export default Error