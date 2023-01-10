import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled?: boolean
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    const onClickHandler = () => {
        props.callBack()
    }
    const buttonClassName = props.disabled ? `${s.button} ${s.disabled}` : `${s.button}`
    return (
        <div className={s.buttonBlock}>
            <button onClick={onClickHandler} disabled={props.disabled} className={buttonClassName}>{props.name}</button>
        </div>
    );
};