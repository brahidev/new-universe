import { motion } from "framer-motion"
import Separator from "../../../Separator/Separator"
import { allImages } from "../../../../utils/importAllImages"
import Styles from './Styles/sections.module.css'

const Welcome = () => (
    <>
		<div className={`flex min-h-[650px] relative flex-row justify-center overflow-hidden`}>
			<div className={`${Styles.bg_spiral_container}`}>
				<div className={`${Styles.bg_spiral} ${Styles.bg_spiral_final}`}></div>
				<div className={`${Styles.bg_spiral} ${Styles.bg_spiral_powerful}`}></div>
				<div className={`${Styles.bg_spiral} ${Styles.bg_spiral_puffy}`}></div>
				<div className={`${Styles.bg_spiral} ${Styles.bg_spiral_pink}}`}></div>
			</div>
			<div className={`${Styles.hero_spiral} md:w-[100%] flex justify-center overflow-hidden`}>
				<div className={`backgroundSpiral ${Styles.backgroundSpiral}`}></div>
			</div>
			<div className="w-[100%] flex justify-center mt-[35%] md:mt-[5rem] flex-col md:flex-row">
				<div className="w-[100%] md:w-[70rem] md:px-[5%] flex flex-col justify-center items-center z-10">
					<span className="text-blue-900 font-bold font-titleExtraBold text-3xl">New Universe Plataform</span>
					<span className="text-blue-900 text-center mt-[1rem] font-bold font-titleNormal text-2xl">
						The New Universe Plataform allows to make very easy for people of all 
						ages to quickly create and share games in the platform as easy as any 
						social network.
					</span>
					<span className="text-blue-900 text-center mt-[1rem] font-bold font-titleNormal text-2xl">
						When others play the games the creators receive direct payment without 
						an intermediary thanks to the new Web monetization system we use.
					</span>
				</div>
				<div className="w-[100%] md:w-[50rem] flex mt-[15rem] md:mt-[12rem] relative flex-col items-center z-10">
					<motion.div
							animate={{
								y: [0, 10, 20 , 10, 0],
								rotate: [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0],
							}}
							transition={{ ease: "linear", delay: 3, duration: 2, repeat: Infinity }}
							className="w-[100%] h-[100%] z-20"
						>
						<motion.img
							animate={{
								scale: [0.1, 0.4, 0.6, 0.8, 0.9, 1],
								y:[-150, -120, -80, -40, -20, 0]
							}}
							transition={{ ease: "linear", duration: 2 }}
							className={`${Styles.kirby} w-[50%] md:w-[25rem]`} 
							src={allImages['Froggy_Hi-2.png'].default.src}
						>
						</motion.img>
					</motion.div>
					<motion.div
							animate={{
								rotate: [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0],
							}}
							transition={{ ease: "linear", delay: 3, duration: 2, repeat: Infinity }}
							className={`${Styles.metaknight} w-[50%] md:w-[18rem]`}
						>
						<motion.img
							animate={{
							scale: [0.1, 0.4, 0.6, 0.8, 0.9, 1],
							}}
							transition={{ ease: "linear", duration: 2 }}
							className="w-[100%]" 
							src={allImages["Pig.png"].default.src}
						>
						</motion.img>
					</motion.div>
					<motion.div
							animate={{
								rotate: [0, -1, -2, -3, -4, -5, -4, -3, -2, -1, 0],
							}}
							transition={{ ease: "linear", delay: 3, duration: 2, repeat: Infinity }}
							className={`${Styles.dedede} w-[50%] md:w-[16rem]`}
						>
						<motion.img
							animate={{
								scale: [0.1, 0.4, 0.6, 0.8, 0.9, 1],
							}}
							transition={{ ease: "linear", duration: 2 }}
							className={`w-[100%]`} src={allImages["PXX_2x.png"].default.src}
						>
						</motion.img>
					</motion.div>
					<motion.div
							animate={{
								rotate: [0, -1, -2, -3, -4, -5, -4, -3, -2, -1, 0],
							}}
							transition={{ ease: "linear", delay: 3, duration: 2, repeat: Infinity }}
							className={`${Styles.waddledee} w-[50%] md:w-[8rem]`}
						>
						<motion.img
							animate={{
								scale: [0.1, 0.4, 0.6, 0.8, 0.9, 1],
							}}
							transition={{ ease: "linear", duration: 2 }}
							className={`w-[100%]`} src={allImages["Paw-single-blue.png"].default.src}
						>
						</motion.img>
					</motion.div>
				</div>
			</div>
		</div>
		<Separator
				position="relative z-50 bg-inherit pt-8 my-[-1rem]"
		/>
	</>
)

export default Welcome
