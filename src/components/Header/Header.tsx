import React from "react";
import styles from './Header.module.css'
import {NavBar} from "../NavBar/NavBar";

export const Header = () => {
    return (
        <div className={styles.header}>
            <NavBar/>
        </div>
    )
}