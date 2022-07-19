import Image from 'next/image'
import imgLogoTitle from '../../public/images/conejoLogo.png'
import styles from './menu.module.css'
import { useState } from "react";
import { initialTabs as tabs } from "../../utils/ingredients";
import { motion, AnimatePresence } from "framer-motion";

const Menu = () => {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

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
                            <li
                                key={item.label}
                                className={`${ styles.li } ${ item === selectedTab ? "selected" : "" }`}
                                onClick={() => setSelectedTab(item)}
                            >
                                {`${item.icon} ${item.label}`}
                                {item === selectedTab ? (
                                    <motion.div className="underline" layoutId="underline" />
                                ) : null}
                            </li>
                        ))}
                    </ul>
                </nav>
                <main className={ styles.main }>
                    <AnimatePresence exitBeforeEnter>
                        <motion.div
                            key={selectedTab ? selectedTab.label : "empty"}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {selectedTab ? selectedTab.icon : "😋"}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </>
    )
}

export default Menu