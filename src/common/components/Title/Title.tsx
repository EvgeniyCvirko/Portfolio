import React from 'react';
import s from './title.module.scss';

type TitlePropsType={
    title: string
}

export const Title = (props: TitlePropsType) => {
    return (
        <h2 className={s.title}>
            {props.title}
        </h2>
    );
}
