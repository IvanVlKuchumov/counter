import {Dispatch, FC, SetStateAction} from 'react';
import s from './Settings.module.css'
import {Button} from "../Button/Button";
import {Setting} from "./Setting/Setting";

type SettingsType = {
    startValue: number
    maxValue: number
    changeMaxValue: Dispatch<SetStateAction<number>>
    changeMinValue: (value: number) => void
    setting: boolean
    changeSettingStatus: (status: boolean) => void
    resetScore: () => void
}

export const Settings: FC<SettingsType> = (props) => {
    const {
        startValue,
        maxValue,
        changeMaxValue,
        changeMinValue,
        setting,
        changeSettingStatus,
        resetScore
    } = props

    const onFocusHandler = () => {
        changeSettingStatus(true)
    }

    const onClickHandler = () => {
        changeSettingStatus(false)
        resetScore()
    }

    const checkValue = !setting ? true : !(startValue >= 0 && maxValue > startValue)

    const isMaxInputError = startValue >= maxValue || maxValue < 1
    const isMinInputError = startValue >= maxValue || startValue < 0

    return (
        <div className={s.container}>
            <div className={s.settings} onFocus={onFocusHandler}>
                <Setting name={'maxValue:'} value={maxValue} changeValue={changeMaxValue}
                         checkError={isMaxInputError}/>
                <Setting name={'minValue:'} value={startValue} changeValue={changeMinValue}
                         checkError={isMinInputError}/>
            </div>
            <div className={s.button}>
                <Button name={'Set'} onClickHandler={onClickHandler} disabled={checkValue}/>
            </div>
        </div>
    );
};
