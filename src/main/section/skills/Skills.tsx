import React from 'react';
import s from './skills.module.scss';
import {Title} from "../../../common/components/Title/Title";
import style from '../../../common/styles/commonStyle.module.scss'
import {Skill} from "../../../common/components/Skill/Skill";

export const Skills = () => {
    return (
        <section className={s.skills}>
            <Title title="Portfolio"/>
            <div className={style.block}>
                <Skill title="DEVELOPMENT" description="React, Redux, AXIOS"/>
                <Skill title="DEVELOPMENT" description="React, Redux, AXIOS"/>
                <Skill title="DEVELOPMENT" description="React, Redux, AXIOS"/>
                <Skill title="DEVELOPMENT" description="React, Redux, AXIOS"/>
            </div>
        </section>
    );
}

