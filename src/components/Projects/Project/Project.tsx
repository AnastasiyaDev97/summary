import React from "react";
import styles from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
    projectPhoto: string
    linkToProject: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={styles.projectWrapper}>
            <div className={styles.imgContainer}>
                <a href={props.linkToProject}>View</a>
            </div>
            <div className={styles.descriptionBlock}>
                <span>{props.title}</span>
                <div>{props.description}</div>
            </div>
        </div>
    )
}