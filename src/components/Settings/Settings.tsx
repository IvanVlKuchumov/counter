import React from 'react';
import s from './Settings.module.css'
import {Button} from "../Button/Button";
import {Setting} from "./Setting/Setting";

type SettingsType = {
    startValue: number
    maxValue: number
    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
    setting: boolean
    changeSettingStatus: (status: boolean) => void
    resetScore: () => void
}

export const Settings: React.FC<SettingsType> = (props) => {

    const onFocusHandler = () => {
        props.changeSettingStatus(true)
    }

    const onClickHandler = () => {
        props.changeSettingStatus(false)
        props.resetScore()
    }

    const checkValue = !props.setting ? true : !(props.startValue >= 0 && props.maxValue > props.startValue)

    const maxInputError = props.startValue >= props.maxValue || props.maxValue < 1
    const minInputError = props.startValue >= props.maxValue || props.startValue < 0

    return (
        <div className={s.container}>
            <div className={s.settings} onFocus={onFocusHandler}>
                <Setting name={'maxValue:'} value={props.maxValue} callBack={props.changeMaxValue}
                         checkError={maxInputError}/>
                <Setting name={'minValue:'} value={props.startValue} callBack={props.changeMinValue}
                         checkError={minInputError}/>
            </div>
            <div className={s.button}>
                <Button name={'Set'} callBack={onClickHandler} disabled={checkValue}/>
            </div>
        </div>
    );
};
