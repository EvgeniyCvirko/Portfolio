import React from 'react';
import s from './footer.module.scss';
import style from '../common/styles/commonStyle.module.scss'

export const Footer = () => {

    return (
        <footer className={s.footer}>
            <div className={style.container}>
                <p className={s.block}>© 2022, All Rights Reserved.</p>
            </div>
        </footer>
    );
}

