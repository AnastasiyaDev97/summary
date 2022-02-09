import React from "react";
import styles from './Header.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";
import { Link } from "react-router-dom";


export const Header = () => {
    let btn = document.getElementById('yo')

    return (
        <header className={styles.header}>
            <div className={`${styleContainer.containerBlock} ${styles.headerContainer}`}>
                <span className={styles.headerLogo}>Anastasiya Zabolotskikh</span>
                <a href={'./../../assets/CV_Anastasiya Zabalotskikh.pdf'} 
                target="_blank" download className={styles.headerLink}>Download CV</a>
            </div>
        </header>
    )
}