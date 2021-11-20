import React from "react";
import styles from './Skills.module.css'
import styleContainer from './../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.containerBlock} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={'HTML&CSS'} description={'description'}/>
                    <Skill title={'JS'} description={'description'}/>
                    <Skill title={'React'} description={'description'}/>
                </div>

            </div>
        </div>
    )
}