import React, {ChangeEvent} from 'react';
import s from './Setting.module.css'

type SettingPropsType = {
    name: string
    value: number
    changeValue: (value: number) => void
    checkError: boolean
}

export const Setting: React.FC<SettingPropsType> = (props) => {
    const {
        name,
        value,
        changeValue,
        checkError

    } = props
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
        changeValue(Number(newValue))
    }

    const inputClass = `${s.input} ${checkError ? s.inputError : ''}`
    return (
        <div className={s.value}>
            <div>{name}</div>
            <div>
                <input type={'number'} value={value} onChange={(event) => onChangeHandler(event)}
                       className={inputClass}/>
            </div>
        </div>
    );
};
