import Image from 'next/image'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { allImages } from "../../utils/importAllImages"
import imgLogoTitle from '../../public/images/NewUniverseLogo.png'
import Error from '../Error/Error';
import styles from './menu.module.css'
import { useState } from "react";
import { initialTabs as tabs } from "../../utils/ingredients";
import { motion, AnimatePresence } from "framer-motion";
import Profile from "../MainItems/Profile";
import Categorias from "../MainItems/Categorias";
import Juegos from "../MainItems/Juegos";
import Noticias from "../MainItems/Noticias";
import { checkLoginCookie } from '../../utils/cookies'

const Menu = () => {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const [ isError, setError ] = useState(false)
    const [ listErrorMessage, setErrorMessage ] = useState([])
    const router = useRouter()

    useEffect( () => {
        const checkLogin = checkLoginCookie()
        if (!checkLogin) {
            router.push('/login')
        }
    }, [router])

    return (
        <>
            <div className={styles.titlePage}>
                <motion.img 
                    animate={{
                        rotate: 45
                    }}
                    transition={{ ease: "linear", duration: 0, repeat: Infinity }}
                    src={allImages['NewUniverseLogo45.png'].default.src}
                    style={{
                        width: '6rem',
                        height: '6rem'
                    }}
                    className={styles.titleLogo}
                />
                <span className={styles.titleText}>Welcome to new universe</span>
            </div>
            <div className={ styles.window }>
                <nav className={ styles.nav }>
                    <ul className={ styles.ulMenu }>
                        {tabs.map((item) => (
                            <motion.li 
                                className={`w-4/5 relative cursor-pointer h-6 flex justify-between items-center min-w-0 select-none mb-4 ${styles.itemMenuText} ${ styles.liMenu } ${ item === selectedTab ? "selected" : "" }`}
                                // layoutId="underline"
                                whileHover={{ scale: 1.1}}
                                whileTap={{ scale: 0.9 }}
                                key={item.label}
                                onClick={() => setSelectedTab(item)}
                            >
                                {`${item.icon} ${item.label}`}
                                {item === selectedTab ? (
                                    <motion.div className="underline" layoutId="underline" />
                                ) : null}
                            </motion.li>
                        ))}
                    </ul>
                </nav>
                <motion.main
                        key={selectedTab ? selectedTab.label : "empty"}
                        className={ styles.main }
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1,background: "radial-gradient(circle, rgba(89,98,196,1) 0%, rgba(178,104,247,1) 62%)" }}
                    >
                    {selectedTab ? 
                        selectedTab.id == 1? <Profile setError={setError} setErrorMessage={setErrorMessage}/>:
                        selectedTab.id == 2? <Categorias/>:
                        selectedTab.id == 3? <Juegos/>:
                        selectedTab.id == 4? <Noticias/>:"⛔"
                    : "🚫"}
                </motion.main>
            </div>
            {isError &&
                <Error
                    listMessages={ listErrorMessage.length === 0 ? ['Todos los campos son obligatorios 🔐'] : listErrorMessage }
                />
            }
        </>
    )
}

export default Menu