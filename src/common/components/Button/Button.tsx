import React from 'react';
import s from './button.module.scss';

type ButtonPropsType = {
    title: string
    callback:() => void
}

export const Button = (props: ButtonPropsType) => {
    return (
        <div className={s.button}>
            <button className={s.title} onClick={props.callback}>{props.title}</button>
        </div>
    );
}
