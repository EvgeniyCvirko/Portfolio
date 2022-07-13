import React from 'react';
import s from './nav.module.scss';
import {NavLink} from "react-router-dom";

export const Nav = () => {
    const navigate = ['Main', "Skills", "Portfolio", "Contacts"]
    return (
        <div className={s.nav}>
        {
            navigate.map((el,i) => {
                return <ul  key={i} >
                    <NavLink to={'/' + el.toLocaleLowerCase()}>{el}</NavLink>
                </ul>
            })
        }
        </div>
    );
}

