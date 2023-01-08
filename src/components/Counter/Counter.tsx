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
}


export const Counter: React.FC<CounterType> = (props) => {
    const disabledInc = props.value === props.maxValue
    const disabledReset = props.value === 0
    const message = 'enter values and press "set"'
    if (!props.setting) {
        return (
            <div className={s.counter}>
                <Scoreboard value={props.value}/>
                <Buttons incScore={props.incScore} resetScore={props.resetScore} disabledInc={disabledInc}
                         disabledReset={disabledReset}/>
            </div>
        )
    } else {
        return (
            <div className={s.counter}>
                <Scoreboard value={message}/>
                <Buttons incScore={props.incScore} resetScore={props.resetScore} disabledInc={true}
                         disabledReset={true}/>
            </div>
        )
    }
};
