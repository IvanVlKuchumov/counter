import React from 'react';
import s from "./Scoreboard.module.css";

type ScoreboardType = {
    value:number|string
    maxValue?:number
}

export const Scoreboard:React.FC<ScoreboardType> = (props) => {

    const scoreboardClass = `${s.scoreboard} 
    ${props.value === props.maxValue || props.value === 'Incorrect value!' ? s.scoreboardMax : ''} 
    ${props.value === 'enter values and press "set"' ? s.scoreboardSettings : ''}`

    return (
        <div className={scoreboardClass}>
            {props.value}
        </div>
    );
};
