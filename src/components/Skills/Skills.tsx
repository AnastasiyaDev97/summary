import React from "react";
import styles from './Skills.module.scss'
import styleContainer from './../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/Title/Title";
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faGit } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import jest from './../../assets/image/jest.svg'
import redux from './../../assets/image/redux.svg'



export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.containerBlock} ${styles.skillsContainer}`}>
                <Title titleText={'Skills'}/>
                <div className={styles.skills}>

                    <Skill title={'HTML5'} description={'description'} logoTypeIcon={faHtml5}/>
                    <Skill title={'CSS3&SASS'} description={'description'} logoTypeIcon={faCss3}/>
                    <Skill title={'JS&TS'} description={'description'} logoTypeIcon={faJs}/>
                    <Skill title={'Jest'} description={'description'} logoType={jest}/>
                    <Skill title={'React'} description={'description'} logoTypeIcon={faReact}/>
                    <Skill title={'Redux'} description={'description'} logoType={redux}/>
                    <Skill title={'Git'} description={'description'} logoTypeIcon={faGit}/>

                </div>

            </div>
        </div>
    )
}