import React from "react";
import styles from './Contacts.module.css'
import styleContainer from './../../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.containerBlock} ${styles.containerContacts}`}>
                <h2 className={styles.title}>Contacts</h2>
                <form className={styles.formWrapper}>
                    <input type="text" placeholder={'input'}/>
                    <input type="text" placeholder={'input'}/>
                    <textarea placeholder={'textarea'} rows={10}/>
                </form>
                <button>Send</button>
            </div>
        </div>
    )
}