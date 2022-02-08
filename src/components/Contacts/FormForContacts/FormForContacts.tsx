import styles from "./FormForContacts.module.scss";
import React, {FC, memo} from "react";
import {useFormik} from "formik";
import {sendMessage} from "../../../api/contacts/contactsAPI";

type FormForContactsType = {
    toggleEditModal: (value: boolean) => void
}

export const FormForContacts: FC<FormForContactsType> = memo(({toggleEditModal}) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            text: ''
        },
        onSubmit: values => {
            sendMessage(values)
            formik.resetForm()
            toggleEditModal(true)
        },
    })

    return (
        <form className={styles.formWrapper} onSubmit={formik.handleSubmit}>
            <div className={styles.row}>
                <div className={styles.inputsWrapper}>
                    <input placeholder={'Name'} {...formik.getFieldProps('name')}/>
                    <input placeholder={'Email'} {...formik.getFieldProps('email')}/>
                </div>
                <div className={styles.textareaWrapper}>
                    <textarea className={styles.textarea} placeholder={'Text me...'}
                              {...formik.getFieldProps('text')}/>
                </div>
            </div>
            <button className={styles.btnSend}>Send Message</button>
        </form>)
})