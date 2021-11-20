import styles from './Skill.module.css'
import React from "react";

type SkillPropsType = {
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={styles.skillBlock}>
            <div className={styles.skillLogo}></div>
            <h3>{props.title}</h3>
            <div className={styles.description}>{props.description}</div>
        </div>
    )
}