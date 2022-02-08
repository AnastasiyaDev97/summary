import React from 'react';
import styles from './Projects.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import {Project} from './Project/Project';
import todolistImg from './../../assets/image/p1.jpg'
import socialNetwork from './../../assets/image/p2.jpg'
import cardsApp from './../../assets/image/p3.jpg'
import {Title} from "../../common/Title/Title";


export const Projects = () => {

    const projects=[
        {imgSrc:cardsApp,title:'CardsApp',description:'Authorization flow, working with tables (sorting,), ' +
                'universal components,modals',linkToProject:'https://nastyaz23.github.io/fridayProject/'},
        {imgSrc:todolistImg,title:'Todolist',description:' In this project you can observe the evolution of data storage' +
                '(1st. useState, 2st. useSelector+useReducer, 3st. redux, 4st. redux toolkit',
            linkToProject:'https://nastyaz23.github.io/TodoList/'},
        {imgSrc:socialNetwork,title:'Social Network',description:'The project implements class ' +
                'components, life cycle methods',
            linkToProject:'https://nastyaz23.github.io/social-network/'},
    ]

    return (
        <div className={styles.projectsWrapper} id="projects">
            <div className={styleContainer.containerBlock}>
                <Title titleText={'My projects'}/>
                <div className={styles.projects}>
                    {projects.map(project=>
                        <Project imgProject={project.imgSrc} title={project.title} description={project.description}
                                                    linkToProject={project.linkToProject}/>)}
                </div>

            </div>
        </div>
    )
}