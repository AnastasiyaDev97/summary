import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./Contact.module.scss";
import React from "react";
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";

type ContactPropsType = {
    icon: IconDefinition
    spanText: string
}

export const Contact = (props: ContactPropsType) => {
    return (
        <p className={styles.contactWrapper}>
            <FontAwesomeIcon icon={props.icon} className={styles.logoContacts}/>
            <span className={styles.contactText}>{props.spanText}</span></p>
    )
}