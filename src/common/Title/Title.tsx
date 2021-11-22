import React from "react";
import styles from './Title.module.scss'

type TitlePropsType={
    titleText:string
}
export const Title=(props:TitlePropsType)=>{
    return(
        <div className={styles.wrapperTitle}>
            <h3 className={styles.title}>{props.titleText}</h3>
        </div>
    )
}