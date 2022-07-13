import React from 'react';
import s from './project.module.scss';
import {BtnLink} from "../BtnLink/BtnLink";

type SkillPropsType = {
    title: string
    description: string
}

export const Project = (props: SkillPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.icon}>
                <BtnLink title='view project'/>
                <img src="" alt=""/>
            </div>
            <h5 className={s.title}>{props.title}
            </h5>
            <p className={s.description}>{props.description}</p>
        </div>
    );
}
