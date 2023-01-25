import s from "./Scoreboard.module.css";
import {FC} from "react";

type ScoreboardType = {
    value: number | string
    maxValue?: number
}

export const Scoreboard: FC<ScoreboardType> = ({value, maxValue}) => {

    const scoreboardClass = `${s.scoreboard} 
    ${(value === maxValue || value === 'Incorrect value!') ? s.scoreboardMax : ''} 
    ${(value === 'enter values and press "set"') ? s.scoreboardSettings : ''}`

    return (
        <div className={scoreboardClass}>
            {value}
        </div>
    );
};
