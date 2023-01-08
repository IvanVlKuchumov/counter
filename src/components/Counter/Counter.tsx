import React from 'react';
import s from './Counter.module.css'
import {Buttons} from "./Buttons/Buttons";
import {Scoreboard} from "./Scoreboard/Scooreboard";

type CounterType = {
    value:number
    incScore:()=>void
    resetScore:()=>void
    maxValue:number
}


export const Counter:React.FC<CounterType> = (props) => {
    const disabledInc = props.value === props.maxValue
    const disabledReset = props.value === 0
    return (
        <div className={s.counter}>
            <Scoreboard value={props.value}/>
            <Buttons incScore={props.incScore} resetScore={props.resetScore} disabledInc={disabledInc} disabledReset={disabledReset}/>
        </div>
    );
};
