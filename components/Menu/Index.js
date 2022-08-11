import Image from 'next/image'
import imgLogoTitle from '../../public/images/NewUniverseLogo.png'
import styles from './menu.module.css'
import { useState } from "react";
import { initialTabs as tabs } from "../../utils/ingredients";
import { motion, AnimatePresence } from "framer-motion";
import Categorias from "../MainItems/Categorias";
import Juegos from "../MainItems/Juegos";
import Noticias from "../MainItems/Noticias";

const Menu = () => {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    console.log("ITEM_SELECT",selectedTab)
    return (
        <>
            <div className={styles.titlePage}>
                <div className={styles.titleLogo}>
                    <Image 
                        src={imgLogoTitle}
                        alt="New universe"
                        width={150}
                        height={150}
                    />
                </div>
                <span className={styles.titleText}>Welcome to new universe</span>
            </div>
            <div className={ styles.window }>
                <nav className={ styles.nav }>
                    <ul className={ styles.ul }>
                        {tabs.map((item) => (
                            <motion.li 
                                className={`w-4/5 relative cursor-pointer h-6 flex justify-between items-center min-w-0 select-none mb-4 ${styles.itemMenuText} ${ styles.li } ${ item === selectedTab ? "selected" : "" }`}
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
                        selectedTab.id == 1? <Categorias/>:
                        selectedTab.id == 2? <Juegos/>:
                        selectedTab.id == 3? <Noticias/>:"⛔"
                    : "🚫"}
                </motion.main>
            </div>
        </>
    )
}

export default Menu