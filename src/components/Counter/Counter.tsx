import s from './Counter.module.css'
import {CounterRemote} from "./CounterRemote/CounterRemote";
import {Scoreboard} from "./Scoreboard/Scooreboard";
import {FC} from "react";

type CounterType = {
    value: number
    incScore: () => void
    resetScore: () => void
    maxValue: number
    setting: boolean
    startValue: number
    message: string
}

export const Counter: FC<CounterType> = (props) => {
    const {
        value,
        incScore,
        resetScore,
        maxValue,
        setting,
        startValue,
        message,
    } = props

    const isDisabledInc = value === maxValue
    const isDisabledReset = value === startValue

    if (!setting) {
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
};
