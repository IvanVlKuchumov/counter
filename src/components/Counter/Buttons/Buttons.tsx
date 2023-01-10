import React from 'react';
import s from './Buttons.module.css'
import {Button} from "../../Button/Button";

type ButtonsType = {
    incScore: () => void
    resetScore: () => void
    disabledInc: boolean
    disabledReset: boolean
}


export const Buttons = (props: ButtonsType) => {
    return (
        <div className={s.buttons}>
            <Button name={'inc'} callBack={props.incScore} disabled={props.disabledInc}/>
            <Button name={'reset'} callBack={props.resetScore} disabled={props.disabledReset}/>
        </div>
    );
};

