import React from 'react';
import s from "./Scoreboard.module.css";

type ScoreboardType = {
    value:number|string
}

export const Scoreboard:React.FC<ScoreboardType> = (props) => {
    return (
        <div className={s.scoreboard}>
            {props.value}
        </div>
    );
};
