import Title from "../../Title"
import Card from "./card"

import { motion } from 'framer-motion'
import Link from 'next/link'

const News = ({ feeds, button = true }) => {
    return (
        <div className="flex flex-col md:pl-24 md:pr-24 md:pt-20 bg-newsFeed bg-cover bg-no-repeat bg-inherit h-auto pb-16">
            <div>
                <Title
                    title={"Latest news and videos"}
                    color="text-white"
                />
            </div>
            <div className="flex flex-col justify-center md:flex-row">
                {
                    feeds.map((item, index) => {
                        let { date: { date }, description, image_url } = item
                        return (
                            <Card
                                key={ index }
                                date={ date }
                                description={ description }
                                image={ image_url }
                            />
                        )
                    })
                }
            </div>
            {
            button ??
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex justify-center items-center m-5"
                >
                    <Link href="/news">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.1 }}
                            className="btnBlue"
                        >
                                <span>
                                    See More
                                </span>
                        </motion.a>
                    </Link>
                </motion.div>
            }
        </div>
    )
}

export default News