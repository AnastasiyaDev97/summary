import React from "react";
import styles from './Skills.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/Title/Title";
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faJs} from '@fortawesome/free-brands-svg-icons';
import {faGit} from '@fortawesome/free-brands-svg-icons';
import axios from './../../assets/image/axios.svg'
import typescript from './../../assets/image/typescript.svg'
import storybook from './../../assets/image/storybook.svg'
import jest from './../../assets/image/jest.svg'
import redux from './../../assets/image/redux.svg'


export const Skills = () => {



    return (
            <div className={styles.skillsBlock} id="skills">
                <div className={`${styleContainer.containerBlock} ${styles.skillsContainer}`}>
                    <Title titleText={'Skills'}/>
                    <div className={styles.skills}>
                        <Skill title={'React'} progress={'90%'} logoTypeIcon={faReact}/>
                        <Skill title={'Redux'} progress={'85%'} logoType={redux}/>
                        <Skill title={'Axios'} progress={'70%'} logoType={axios}/>
                        <Skill title={'Java Script'} progress={'75%'} logoTypeIcon={faJs}/>
                        <Skill title={'Type Script'} progress={'70%'} logoType={typescript}/>
                        <Skill title={'Jest'} progress={'55%'} logoType={jest}/>
                        <Skill title={'Git'} progress={'40%'} logoTypeIcon={faGit}/>
                        <Skill title={'Storybook'} progress={'60%'} logoType={storybook}/>

                    </div>

                </div>
            </div>
    )
}