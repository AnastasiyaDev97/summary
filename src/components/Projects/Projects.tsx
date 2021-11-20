import React from "react";
import styles from './Projects.module.css'
import styleContainer from './../../common/styles/Container.module.css'
import {Project} from "./Project/Project";
import counter from "../../common/images/counter.png";

export const Projects = () => {
    return (
        <div className={styles.projectsWrapper}>    `
            <div className={`${styleContainer.containerBlock} ${styles.projectsContainer}`}>
                <h2 className={styles.title}>My projects</h2>
                <div className={styles.projects}>
                    <Project title={'Todolist'} description={'description'} projectPhoto={''} linkToProject={''}/>
                    <Project title={'Counter'} description={'description'} projectPhoto={counter} linkToProject={''}/>
                    <Project title={'Social Network'} description={'description'} projectPhoto={''} linkToProject={''}/>
                </div>

            </div>
        </div>
    )
}