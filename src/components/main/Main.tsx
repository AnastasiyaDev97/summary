import React from "react";
import styles from './Main.module.scss'
import styleContainer from './../../common/styles/Container.module.css'
import myPhoto from'./myPhoto.jpg'




export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={`${styleContainer.containerBlock} ${styles.containerMain}`}>
                <div className={styles.photoContainer}>
                    <img src={myPhoto} className={styles.photo} alt={'Anastasiya'}/>
                </div>

                <div className={styles.welcoming}>
                    <h2 className={styles.caption}>
                        <span>Hey, I am</span><br/>
                        <span>Anastasiya Zabolotskikh</span>
                    </h2>
                    <p className={styles.frontend}>Frontend Developer</p>
                </div>
            </div>
        </div>
    )
}