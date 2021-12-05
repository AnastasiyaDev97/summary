import React from "react";
import styles from './Footer.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'

export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.containerBlock} ${styles.containerFooter}`}>
                <div className={styles.wrapper}>
                    <a href={'#'}>Linkedin</a>
                    <a href={'#'}>GitHub</a>
                    <a href={'#'}>Telegram</a>
                    <a href={'#'}>Facebook</a>
                    <a href={'#'}>Vk</a>
                </div>
                <p className={styles.copyright}>2021 &copy; All rights reserved</p>
            </div>
        </div>
    )
}