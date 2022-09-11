import { useState } from 'react'
import { motion } from "framer-motion"
import { allImages } from "../../../utils/importAllImages"
import Image from 'next/image'
import Link from 'next/link'
import star from '../../../public/images/star.png'

const Menu = () => {
    const [ dropdown, setDropdown ] = useState(false)

    return (
        <nav className="fixed top-0 w-[100vw] border-gray-200 px-2 bg-white/70 md:px-4 py-2.5 md:bg-white/70 z-[60]">
            <div className="flex flex-wrap justify-between items-center mx-auto md:justify-center">
                <Link href="/" >
                    <a className="flex items-center md:hidden">
                        <motion.img
                            animate={{
                                scale:[1.1,1,0.9,0.8,0.7,0.8,0.9,1,1.1]
                            }}
                            transition={{ ease: "linear", duration: 3, repeat: Infinity }}
                            src={allImages['NewUniverseLogo.png'].default.src}
                            style={{
                                width: '5rem',
                                height: '5rem',
                                left: '1rem',
                                position: 'absolute'
                            }}
                        />
                    </a>
                </Link>
                <div className="flex items-center md:order-2">
                    <button
                        data-collapse-toggle="mega-menu"
                        type="button"
                        className="focus-within:bg-white/70 focus-within:outline-none focus:bg-white/70 focus:outline-none active:bg-white/70 active:outline-none inline-flex items-center p-2 ml-1 text-sm text-blue-800 rounded-lg focus:bg-white md:hidden"
                        aria-controls="mega-menu"
                        aria-expanded="false"
                        onClick={ () => setDropdown(!dropdown) }
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg aria-hidden="true" className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div id="mega-menu" className={`${ !dropdown ? 'hidden' : 'flex' } justify-center items-center w-full text-sm md:flex md:w-auto md:order-1`}>
                    {!dropdown ?
                        <>
                            <Link href="/" >
                                <motion.img
                                    animate={{
                                        scale:[1.1,1,0.9,0.8,0.7,0.8,0.9,1,1.1]
                                    }}
                                    transition={{ ease: "linear", duration: 3, repeat: Infinity }}
                                    src={allImages['NewUniverseLogo.png'].default.src}
                                    style={{
                                        width: '5rem',
                                        height: '5rem',
                                        left: '1rem',
                                        position: 'absolute'
                                    }}
                                />
                            </Link>
                            <Link href="/login">
                                <motion.button
                                    animate={{
                                        scale:[1,0.95,1]
                                    }}
                                    transition={{ ease: "linear", duration: 3, repeat: Infinity }}
                                    style={{
                                        width: '10rem',
                                        height: '3rem',
                                        right: '1rem',
                                        position: 'absolute',
                                    }}
                                    whileHover={{ background: 'rgb(67 56 202 / var(--tw-text-opacity))', border: '2px solid #fff', color:'#fff' }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`p-2 w-20 italic text-center font-bold text-indigo-700 rounded-lg shadow-lg border-solid border-2 border-indigo-700`}
                                >Login / Registro</motion.button>
                            </Link>
                        </>
                        :null
                    }
                    <ul className="flex flex-col text-center mt-4 md:flex-row md:space-x-32 md:mt-0 font-bold">
                        <li className="py-5">
                            <Link href="/" >
                                <a className=" text-blue-900 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-900 md:p-0" aria-current="page">
                                    <span>
                                        <Image src={ star } width={ 15 } height={ 15 } className="mr-3 sm:h-9" alt="New Universe star" />
                                    </span>
                                    <span className="text-2xl"> Home </span>
                                    <span>
                                        <Image src={ star } width={ 15 } height={ 15 } className="mr-3 sm:h-9" alt="New Universe star" />
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li className="py-5">
                            <Link href="/" >
                                <a className="text-blue-900 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-900 md:p-0" aria-current="page">
                                    <span className="text-2xl"> About </span>
                                </a>
                            </Link>
                        </li>
                        <li className="py-5">
                            <Link href="/" >
                                <a className="text-blue-900 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-900 md:p-0" aria-current="page">
                                    <span className="text-2xl"> News & videos </span>
                                </a>
                            </Link>
                        </li>
                        {dropdown?
                            <motion.li 
                                className="py-1"
                                animate={{
                                    scale:[1,0.95,1]
                                }}
                                transition={{ ease: "linear", duration: 3, repeat: Infinity }}
                                style={{
                                    height: '3rem'
                                }}
                            >
                                <Link href="/login" >
                                    <a className="text-blue-900 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-900 md:p-0" aria-current="page">
                                        <span className="text-2xl"> Login / Registro </span>
                                    </a>
                                </Link>
                            </motion.li>
                            :null
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu