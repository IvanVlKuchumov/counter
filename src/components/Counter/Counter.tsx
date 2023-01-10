import React from 'react';
import s from './Counter.module.css'
import {Buttons} from "./Buttons/Buttons";
import {Scoreboard} from "./Scoreboard/Scooreboard";

type CounterType = {
    value: number
    incScore: () => void
    resetScore: () => void
    maxValue: number
    setting: boolean
    startValue: number
    message: string
}


export const Counter: React.FC<CounterType> = (props) => {
    const disabledInc = props.value === props.maxValue
    const disabledReset = props.value === props.startValue
    if (!props.setting) {
        return (
            <div className={s.counter}>
                <Scoreboard value={props.value} maxValue={props.maxValue}/>
                <Buttons incScore={props.incScore} resetScore={props.resetScore} disabledInc={disabledInc}
                         disabledReset={disabledReset}/>
            </div>
        )
    } else {
        return (
            <div className={s.counter}>
                <Scoreboard value={props.message}/>
                <Buttons incScore={props.incScore} resetScore={props.resetScore} disabledInc={true}
                         disabledReset={true}/>
            </div>
        )
    }
};
