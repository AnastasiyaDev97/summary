import React from "react";
import styles from './Header.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";


export const Header = () => {
    let btn = document.getElementById('yo')
    console.log(btn)
    return (
        <header className={styles.header}>
            <div className={`${styleContainer.containerBlock} ${styles.headerContainer}`}>
                <span className={styles.headerLogo}>Anastasiya Zabolotskikh</span>
                <a href={'#'} className={styles.headerLink}>Download CV</a>
            </div>
        </header>
    )
}