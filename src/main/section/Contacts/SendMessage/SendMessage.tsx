import React from 'react';
import s from './sendMessage.module.scss';
import {Title} from "../../../../common/components/Title/Title";


export const SendMessage = () => {

    return (
        <div className={s.sendMessage}>
            <Title title='Send Message'/>
            <form className={s.form}>
                <div className={s.inputBlock}>
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Your Email"/>
                </div>
                <textarea placeholder="Your Message"/>
                <button className={s.button}>Send Your Message</button>
            </form>
        </div>
    );
}

