import s from './Button.module.css'
import {FC} from "react";

type ButtonPropsType = {
    name: string
    onClickHandler: () => void
    disabled?: boolean
}

export const Button: FC<ButtonPropsType> = ({name, disabled, onClickHandler}) => {

    const buttonClassName = disabled ? `${s.button} ${s.disabled}` : `${s.button}`
    return (
        <div className={s.buttonBlock}>
            <button onClick={onClickHandler} disabled={disabled} className={buttonClassName}>{name}</button>
        </div>
    );
};