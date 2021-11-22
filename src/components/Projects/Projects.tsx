import React from 'react';
import styles from './Projects.module.scss'
import styleContainer from './../../common/styles/Container.module.css'
import {Project} from './Project/Project';
import todolistImg from './../../assets/image/c1.jpg'
import {Title} from "../../common/Title/Title";


export const Projects = () => {
   /* const todolistBGI={
        backgroundImage:`url(${todolistImg})`,
    }*/
    return (
        <div className={styles.projectsWrapper}>
            <div className={styleContainer.containerBlock} >
                <Title titleText={'My projects'}/>
                <div className={styles.projects}>
                    <Project imgProject={todolistImg} title={'Todolist'} description={'description'}  linkToProject={''}/>
                    <Project imgProject={todolistImg} title={'Counter'} description={'description'}  linkToProject={''}/>
                    <Project imgProject={todolistImg} title={'Social Network'} description={'description'}  linkToProject={''}/>
                </div>

            </div>
        </div>
    )
}