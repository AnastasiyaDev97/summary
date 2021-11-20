import React from "react";
import styles from './Footer.module.css'
import styleContainer from './../../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.containerBlock} ${styles.containerFooter}`}>
                <h3>Anastasiya Zabolotskikh</h3>
                <div className={styles.wrapper}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <span>2021 &copy; All rights reserved</span>
            </div>
        </div>
    )
}