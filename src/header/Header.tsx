import React from 'react';
import s from './header.module.scss';
import {Nav} from "./nav/Nav";
import style from '../common/styles/commonStyle.module.scss'


export const Header = () => {
    return (
        <header className={s.header}>
            <div className={style.container}>
                <div className ={s.blockMenu}>
                    <Nav/>
                </div>
            </div>
        </header>
    );
}

