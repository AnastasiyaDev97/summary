import React from "react";
import styles from './Project.module.scss'

type ProjectPropsType = {
    title: string
    description: string
    linkToProject: string
    imgProject: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={styles.projectWrapper}>
            <div className={styles.imgContainer}>
                <img src={props.imgProject} className={styles.imgProject} alt={'myProject'}/>
                <a className={styles.linkToProject} href={props.linkToProject}>
                    {props.title}
                </a>
            </div>


        </div>
    )
}