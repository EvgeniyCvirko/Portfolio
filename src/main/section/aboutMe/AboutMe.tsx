import React from 'react';
import s from './aboutMe.module.scss';

export const AboutMe = () => {
    return (
        <section className={s.aboutMe}>
            <div className={s.greeting}>
                <h5>Hello, my name is</h5>
                <h1>Eugeniy Cvirko</h1>
                <h5>Front-end Developer from Minsk</h5>
            </div>
            <div className={s.photo}>
                <img src="" alt=""/>
            </div>

        </section>
    );
}

