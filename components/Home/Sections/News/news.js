import Title from "../../Title"
import Card from "./card"

import { motion } from 'framer-motion'
import Link from 'next/link'

const News = ({ feeds }) => {
    console.log('Feeds in component News', feeds)

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
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-center m-5"
            >
                <Link href="/news">
                        <a className="p-3 pl-[5rem] pr-[5rem] w-[90%] bg-gradient-to-r from-blue-600 to-blue-700 border-2 font-titleExtraBold border-blue-900 text-white rounded-full">
                            See More
                        </a>
                </Link>
            </motion.div>
        </div>
    )
}

export default News