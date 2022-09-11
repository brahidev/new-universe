import { useEffect } from 'react'
import {motion} from "framer-motion"
import { allImages } from "../../../utils/importAllImages"

const ModalLogin = ({scrollOn,handleClose}) => {
    useEffect(() => {
        scrollOn(false)
    })

    const closeWindow = () => {
        handleClose()
        scrollOn(true)
    }

    return (
        <div className="fixed z-[60] w-[100vw] h-[100vh] bg-[#00000063]">
            <motion.div 
                className="absolute w-[20rem] h-[100vh] right-0 bg-gradient-to-b from-[#FCD555] to-[#FFAE29]"
                animate={{
                    x: [200, 190, 180 , 170, 160, 150, 140, 130, 120, 110, 100, 90, 80 , 70, 60, 50, 40, 30, 20, 10, 0],
                }}
                transition={{ ease: "linear", duration: 0.5 }}
                >
                <motion.img
                    animate={{
                        scale:[1.1,1,0.9,1,1.1]
                    }}
                    transition={{ ease: "linear", duration: 3, repeat: Infinity }}
                    src={allImages['closeBtn.png'].default.src}
                    style={{
                        width: '2rem',
                        height: '2rem',
                        right: '1rem',
                        top: '1rem',
                        position: 'absolute',
                        cursor: 'pointer'
                    }}
                    onClick={closeWindow}
                />
            </motion.div>
        </div>
    )
}

export default ModalLogin