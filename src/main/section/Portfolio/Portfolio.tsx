import React from 'react';
import s from './portfolio.module.scss';
import {Title} from "../../../common/components/Title/Title";
import style from '../../../common/styles/commonStyle.module.scss'
import {Project} from "../../../common/components/Project/Project";

export const Portfolio = () => {
    return (
        <section className={s.portfolio}>
            <Title title="My Portfolio"/>
            <div className={style.block}>
                <Project title="DEVELOPMENT" description="React, Redux, AXIOS"/>
                <Project title="DEVELOPMENT" description="React, Redux, AXIOS"/>
            </div>
        </section>
    );
}

