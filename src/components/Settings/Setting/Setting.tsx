import React, {ChangeEvent} from 'react';
import s from './Setting.module.css'

type SettingPropsType = {
    name: string
    value: number
    callBack: (value: number) => void
}

export const Setting: React.FC<SettingPropsType> = (props) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
        props.callBack(Number(newValue))
    }

    const inputClass = `${s.input}`
    return (
        <div className={s.value}>
            <div>{props.name}</div>
            <div>
                <input type={'number'} value={props.value} onChange={(event) => onChangeHandler(event)} className={inputClass}/>
            </div>
        </div>
    );
};
