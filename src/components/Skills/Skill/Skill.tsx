import styles from './Skill.module.scss'
import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type SkillPropsType = {
    title: string
    progress: string
    logoTypeIcon?: IconProp
    logoType?: string
}

export const Skill = (props: SkillPropsType) => {
    const progressStyle = {
        background: '#fff',
        height: '100%',
        width: props.progress,
    }
    return (
        <div className={styles.skillBlock}>
            <div className={styles.logoBlock}>
                {props.logoTypeIcon ?
                    <FontAwesomeIcon icon={props.logoTypeIcon} className={styles.skillLogo}/>
                    : <img src={props.logoType} className={styles.skillLogo} alt={'logoIcon'}/>}
                <h4 className={styles.skillTitle}>{props.title}</h4>
            </div>
            <div className={styles.progress}>
                <span className={styles.percent}>{props.progress}</span>
                <div style={progressStyle}></div>
            </div>
        </div>
    )
}