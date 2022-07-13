import React from 'react';
import s from './btnLink.module.scss';

type BtnLinkPropsType = {
    title: string
}

export const BtnLink = (props: BtnLinkPropsType) => {
    return (
        <div className={s.btnLink}>
            <a href="" className={s.link}>{props.title}</a>
        </div>
    );
}
