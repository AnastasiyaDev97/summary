import React from "react";
import styles from './Main.module.css'
import styleContainer from './../../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={`${styleContainer.containerBlock} ${styles.containerMain}`}>
                <div className={styles.welcoming}>
                    <span>Hi there</span>
                    <h1>I am Nastya Zabolotskikh</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    )
}