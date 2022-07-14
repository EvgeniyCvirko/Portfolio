import React from 'react';
import s from './contactsData.module.scss';
import {Contact} from "../../../../common/components/Contact/Contact";
import {Title} from "../../../../common/components/Title/Title";


export const ContactsData = () => {

    return (
        <div className={s.contactsData}>
            <Title title='GET IN TOUCH'/>
            <div className={s.block}>
                <Contact title='Phone' src=''/>
                <Contact title='Location' src=''/>
                <Contact title='Email' src=''/>
            </div>
        </div>
    );
}

