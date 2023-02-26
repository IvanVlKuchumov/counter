import s from './Counter.module.css'
import {CounterRemote} from "./CounterRemote/CounterRemote";
import {Scoreboard} from "./Scoreboard/Scooreboard";
import {FC, memo} from "react";
import {useDispatch} from 'react-redux';
import {incScoreAC, resetScoreAC} from '../../state/value-reducer';

type CounterType = {
    value: number
    maxValue: number
    isSetting: boolean
    startValue: number
    message: string
}

export const Counter: FC<CounterType> = memo( (props) => {
    console.log('render')
    const {
        value,
        maxValue,
        isSetting,
        startValue,
        message,
    } = props

    const dispatch = useDispatch()

    const incScore = () => {
        dispatch(incScoreAC())
    }
        const resetScore = () => {
        dispatch(resetScoreAC())
    }

    const isDisabledInc = value === maxValue
        const isDisabledReset = value === startValue

    if (!isSetting) {
        return (
            <div className={s.counter}>
                <Scoreboard value={value} maxValue={maxValue}/>
                <CounterRemote incScore={incScore} resetScore={resetScore} isDisabledInc={isDisabledInc}
                               isDisabledReset={isDisabledReset}/>
            </div>
        )
    }

    return (
        <div className={s.counter}>
            <Scoreboard value={message}/>
            <CounterRemote
                incScore={incScore}
                resetScore={resetScore}
                isDisabledInc={true}
                isDisabledReset={true}
            />
        </div>
    )
});
