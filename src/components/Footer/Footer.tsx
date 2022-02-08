import React from "react";
import styles from './Footer.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'

export const Footer = () => {

    const currYear = new Date().getFullYear()
    const contactsArr=[
        {title:'Linkedin',link:'https://www.linkedin.com/in/anastasiya-zabalotskikh-302121211/'},
        {title:'GitHub',link:'https://github.com/NastyaZ23'},
        {title:'Telegram',link:'https://t.me/nastyhja'},
    ]

    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.containerBlock} ${styles.containerFooter}`}>
                <div className={styles.wrapper}>
                    {contactsArr.map((contact,index)=>
                        <a key={index} href={contact.link} target='_blank'>{contact.title}</a>
                    )}
                </div>
                <p className={styles.copyright}>{currYear} &copy; All rights reserved</p>
            </div>
        </div>
    )
}