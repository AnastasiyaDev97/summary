import React from "react";
import styles from './Contacts.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faHouseUser} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {Contact} from "./Contact/Contact";

export const Contacts = () => {
    const logoContacts = [{icon: faEnvelope, spanText: 'nastyh1233@gmail.com'},
        {icon: faPhone, spanText: '+375 (44) 729-60-10'},
        {icon: faHouseUser, spanText: 'Minsk, Belarus'},]
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.containerBlock} ${styles.containerContacts}`}>
                <div className={styles.getInTouchBlock}>
                    <h4 className={styles.contactsTitle}>Get in Touch</h4>
                    <div className={styles.contacts}>
                        {logoContacts.map((m, i) => <Contact key={i} icon={m.icon}
                                                             spanText={m.spanText}/>)}
                    </div>
                </div>
                <form className={styles.formWrapper}>
                    <div className={styles.row}>
                        <div className={styles.inputsWrapper}>
                            <input placeholder={'Name'}/>
                            <input placeholder={'Email'}/>
                        </div>
                        <div className={styles.textareaWrapper}>
                            <textarea className={styles.textarea} placeholder={'Text me...'}/>
                        </div>
                    </div>
                    <button className={styles.btnSend}>Send Message</button>
                </form>
            </div>
        </div>
    )
}