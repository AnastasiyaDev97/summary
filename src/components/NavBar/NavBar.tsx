import React from "react";
import styles from './NavBar.module.scss'

export const NavBar = () => {
    return (
        <div className={styles.navbarContainer}>
            <nav className={styles.nav}>
                <a href="#">Main</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Contacts</a>
            </nav>
            <div className={styles.navFooter}>
                &copy; Copyright
                <br/>
                All rights reserved
            </div>
        </div>
    )
}