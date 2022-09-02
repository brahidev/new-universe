import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'

import CardModal from '../../../Modal/card';
import Moment from 'react-moment';
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ date, description, image, button }) => {

    const [modalOpen, setModalOpen] = useState(false)
    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)

    const handeClick = () => {
        if (!button) {
            modalOpen ? close() : open()
        }
    }

    return (
        <>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex flex-col bg-white m-5 p-5 rounded-lg md:w-[20%]"
                onClick={ handeClick }
            >
                <div>
                    <Image
                        src={ image }
                        alt="Picture of the author"
                        width={400}
                        height={200}
                        style={{ borderRadius: '0.5rem' }}
                    />
                </div>
                <div className="text-left text-xs mt-3 text-blue-900 font-titleLato">
                    <p>
                        <Moment format="D MMM YYYY" withTitle>
                            { date }
                        </Moment>
                    </p>
                </div>
                <div className="mt-3 text-left text-blue-900 font-titleBold">
                    <a>
                        { description }
                    </a>
                </div>
            </motion.div>

            <AnimatePresence
                initial={ false }
                exitBeforeEnter={ true }
                onExitComplete={ () => null }
            >
                { modalOpen && <CardModal date={ date } description={ description } image={ image } handleClose={ close } /> }
            </AnimatePresence>
        </>
    )
}

export default Card