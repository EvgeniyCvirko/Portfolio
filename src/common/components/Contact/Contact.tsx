import React from 'react';
import s from './contact.module.scss';

type ContactPropsType = {
    title: string
    src: string
}

export const Contact = (props: ContactPropsType) => {
    return (
        <div className={s.contact}>
            <div className={s.icon}>
                <img src={props.src} alt=""/>
            </div>
            <div className={s.title}>{props.title}</div>
        </div>
    );
}
