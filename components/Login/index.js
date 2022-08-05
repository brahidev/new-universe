import { motion } from 'framer-motion';

const Login = () => (
    <>
        <motion.div
            className="flex flex-col"
            animate={{ x: [-10, 0], }}
            transition={{
                delay: 0.5,
                x: { duration: 1 },
                default: { ease: "linear" }
            }}
        >
            <div className="pb-5">
                <input
                    type="text"
                    placeholder="Username"
                    className="p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 rounded-xl text-white bg-indigo-700 shadow-lg outline-0 placeholder:italic placeholder:text-white"
                />
            </div>
        </motion.div>
        <motion.div
            className="flex flex-row justify-center pt-5"
            animate={{ x: [10, 0], }}
            transition={{
                delay: 0.5,
                x: { duration: 1 },
                default: { ease: "linear" }
            }}
        >
            <div className="mr-2">
                <button
                    className="p-2 w-20 italic text-center text-white rounded-lg shadow-lg border-solid border-2 border-indigo-700"
                >
                    Login
                </button>
            </div>
            <div>
                <button
                    className="p-2 w-20 italic text-center text-white rounded-lg shadow-lg border-solid border-2 border-indigo-700"
                >
                    Register
                </button>
            </div>
        </motion.div>
    </>

)

export default Login