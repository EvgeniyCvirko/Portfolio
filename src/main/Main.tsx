import React from 'react';
import s from './main.module.scss';
import style from '../common/styles/commonStyle.module.scss'
import {AboutMe} from "./section/aboutMe/AboutMe";
import {Skills} from "./section/skills/Skills";
import {Portfolio} from "./section/Portfolio/Portfolio";
import {Vacancy} from "./section/Vacancy/Vacancy";
import {Contacts} from "./section/Contacts/Contacts";

export const Main = () => {
    return (
        <main className={s.main}>
            <div className={style.container}>
                <AboutMe/>
                <Skills/>
                <Portfolio/>
                <Vacancy/>
                <Contacts/>
            </div>
        </main>
    );
}

