import React from 'react';
import s from './skill.module.scss';

type SkillPropsType = {
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <img src="" alt=""/>
            </div>
            <h5 className={s.title}>{props.title}
            </h5>
            <p className={s.description}>{props.description}</p>
        </div>
    );
}
