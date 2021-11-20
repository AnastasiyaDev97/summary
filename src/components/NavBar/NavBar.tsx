import React from "react";
import styles from './NavBar.module.css'

export const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    )
}