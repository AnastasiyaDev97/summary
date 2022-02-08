import React, {FC, memo} from "react";
import styles from './Project.module.scss'

type ProjectPropsType = {
    title: string
    description: string
    linkToProject: string
    imgProject: string
}

export const Project: FC<ProjectPropsType> = memo(({title,description,linkToProject,imgProject}) => {
        return (
            <div className={styles.projectBlock}>
            <div className={styles.projectWrapper}>
                <div className={styles.imgContainer}>
                    <img src={imgProject} className={styles.imgProject} alt={'myProject'}/>
                    <a className={styles.linkToProject} href={linkToProject} target='_blank'>
                        {title}
                    </a>
                </div>
            </div>
                <span className={styles.description}>{description}</span>
            </div>
        )
    }
)