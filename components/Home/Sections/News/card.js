import { motion } from 'framer-motion'

const Card = () => (
    <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex flex-col bg-white m-5 p-5 rounded-lg md:w-[20%]"
    >
        <div>
            <img className="rounded-lg" src="https://assets.nintendo.com/image/upload/dpr_auto/q_auto/f_auto/c_pad,w_334/ncom/en_US/articles/2022/have-a-feast-of-fun/LHA-714-KDB-2Wave-EN_v02" alt="Card Image" />
        </div>
        <div className="text-left text-xs mt-3 text-blue-900 font-titleLato">
            <p> Aug 30, 2022 </p>
        </div>
        <div className="mt-3 text-left text-blue-900 font-titleBold">
            <article>
                Have a feast of fun with icon elements inspired by Kirby Dream Buffet for a limited time!
            </article>
        </div>
    </motion.div>
)

export default Card