import React from 'react';
import s from './contacts.module.scss';
import {Title} from "../../../common/components/Title/Title";
import {ContactsData} from "./ContactsData/ContactsData";
import {SendMessage} from "./SendMessage/SendMessage";

export const Contacts = () => {
    return (
        <section className={s.contacts}>
            <Title title="Contact Me"/>
            <ContactsData/>
            <SendMessage/>
        </section>
    );
}

