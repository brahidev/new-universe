import { motion } from "framer-motion"

const dropIn = {
    hidden: {
        y: "100vh",
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
        y: "-100vh",
        opacity: 0
    }
}

const Categorias = ()=>{
    return (
        <div className="flex flex-col overflow-x-hidden overflow-y-scroll scrollbar mw-x-[100%] w-[100%] h-[100%]">
            <h1 className="tittleMenuText">Games</h1>
            <motion.div
                onClick={ (e) => e.stopPropagation() }
                className="w-[80%] h-auto m-auto p-10 rounded-lg flex flex-col items-center shadow-lg shadow-indigo-500/40 from-slate-100"
                variants={ dropIn }
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="flex flex-col w-[100%]">
                    <div className="h-[20px] w-[100%] flex justify-center my-[1rem]">
                        <motion.input
                        type="text"
                        placeholder="Name"
                        className="text-base w-[60%] absolute p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        />
                    </div>
                    <div className="h-[50px] flex justify-center my-[1rem]">
                        <motion.textarea
                        type="text"
                        placeholder="Description"
                        className="text-base w-[60%] absolute p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        />
                    </div>
                    <div className="h-[20px] flex justify-center my-[1rem]">
                        <motion.input
                        type="text"
                        placeholder="Game"
                        className="text-base w-[60%] absolute p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        />
                    </div>
                    <div className="h-[20px] flex justify-center my-[1rem]">
                        <motion.input
                        type="range"
                        placeholder="Calification"
                        className="text-base w-[60%] absolute p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-center pt-[1rem]">
                    <div className="mr-2">
                        <motion.button
                        className="text-base p-2 w-20 italic text-center text-white rounded-lg shadow-lg border-solid border-2 border-indigo-700 bg-indigo-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        >
                            Save
                        </motion.button>
                    </div>
                    <div>
                        <motion.button
                        className="text-base p-2 w-20 italic text-center text-white rounded-lg shadow-lg border-solid border-2 border-indigo-700 bg-indigo-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        // onClick={handleClose}
                        >
                            Cancel
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Categorias