import {FC, memo} from 'react';
import s from './Settings.module.css'
import {Button} from "../Button/Button";
import {Setting} from "./Setting/Setting";
import {useDispatch} from 'react-redux';
import {toggleSettingModeAC} from '../../state/settings-reducer';
import {changeMaxValueAC, changeStartValueAC, resetScoreAC} from '../../state/value-reducer';

type SettingsType = {
    startValue: number
    maxValue: number
    setting: boolean

}

export const Settings: FC<SettingsType> = memo((props) => {
     const {
        startValue,
        maxValue,
        setting
    } = props

    const dispatch = useDispatch()

    const onFocusHandler = () => {
        dispatch(toggleSettingModeAC(true))
    }

    const onClickHandler = () => {
        dispatch(toggleSettingModeAC(false))
        dispatch(resetScoreAC())
    }

    const changeMaxValue = (maxValue: number) => {
        dispatch(changeMaxValueAC(maxValue))
    }

    const changeStartValue = (startValue: number) => {
        dispatch(changeStartValueAC(startValue))
    }

    const checkValue = !setting ? true : !(startValue >= 0 && maxValue > startValue)

    const isMaxInputError = startValue >= maxValue || maxValue < 1
    const isMinInputError = startValue >= maxValue || startValue < 0

    return (
        <div className={s.container}>
            <div className={s.settings} onFocus={onFocusHandler}>
                <Setting
                    name={'maxValue:'}
                    value={maxValue}
                    changeValue={changeMaxValue}
                    checkError={isMaxInputError}
                />
                <Setting
                    name={'minValue:'}
                    value={startValue}
                    changeValue={changeStartValue}
                    checkError={isMinInputError}
                />
            </div>
            <div className={s.button}>
                <Button name={'Set'} onClickHandler={onClickHandler} disabled={checkValue}/>
            </div>
        </div>
    );
});
