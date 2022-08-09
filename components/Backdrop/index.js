import { motion } from 'framer-motion';

const Backdrop = ({ children, onclick }) => {
    return (
        <motion.div
            className="absolute top-0 left-0 h-full w-full flex items-center content-center overflow-y-hidden bg-gradient-to-r from-indigo-500"
            onClick={ onclick }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            { children }
        </motion.div>
    )
}

export default Backdrop