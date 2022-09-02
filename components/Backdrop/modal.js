import { motion } from 'framer-motion';

const BackdropModal = ({ children, onclick }) => {
    return (
        <motion.div
            className="fixed top-0 left-0 h-full w-full flex items-center content-center overflow-y-hidden z-50"
            onClick={ onclick }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            { children }
        </motion.div>
    )
}

export default BackdropModal