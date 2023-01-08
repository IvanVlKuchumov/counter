import React from 'react';
import s from "./Scoreboard.module.css";

type ScoreboardType = {
    value:number
}

export const Scoreboard:React.FC<ScoreboardType> = (props) => {
    return (
        <div className={s.scoreboard}>
            {props.value}
        </div>
    );
};
