import styles from './Skill.module.scss'
import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type SkillPropsType = {
    title: string
    description: string
    logoTypeIcon?: IconProp
    logoType?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={styles.skillBlock}>
            <div className={styles.logoBlock}>
                {props.logoTypeIcon ?
                    <FontAwesomeIcon icon={props.logoTypeIcon} className={styles.skillLogo}/>
                    : <img src={props.logoType} className={styles.skillLogo} alt={'logoIcon'}/>}
                <h4 className={styles.skillTitle}>{props.title}</h4>
            </div>
            <div className={styles.description}>{props.description}</div>
        </div>
    )
}