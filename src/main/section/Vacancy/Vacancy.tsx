import React from 'react';
import s from './vacancy.module.scss';
import {Title} from "../../../common/components/Title/Title";
import {Button} from "../../../common/components/Button/Button";

export const Vacancy = () => {
    const callbackHandler = () =>{

    }
    return (
        <section className={s.vacancy}>
            <Title title="I Am Available For Freelance"/>
            <div className={s.block}>
                <Button title="OFFER ME" callback={callbackHandler}/>
            </div>
        </section>
    );
}

