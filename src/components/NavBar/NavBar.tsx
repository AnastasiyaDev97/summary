import styles from './NavBar.module.scss'
import {Scrollchor} from "react-scrollchor";

export const NavBar = () => {
    return (
        <div className={styles.navbarContainer}>
            <nav className={styles.nav}>
                <Scrollchor to="#main">Main</Scrollchor>
                <Scrollchor to="#skills">Skills</Scrollchor>
                <Scrollchor to="#projects" >Projects</Scrollchor>
                <Scrollchor to="#contacts" >Contacts</Scrollchor>
            </nav>
            <div className={styles.navFooter}>
                &copy; Copyright
                <br/>
                All rights reserved
            </div>
        </div>
    )
}