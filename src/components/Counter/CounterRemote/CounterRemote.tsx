import {FC} from 'react';
import s from './CounterRemote.module.css'
import {Button} from "../../Button/Button";

type CounterRemoteType = {
    incScore: () => void
    resetScore: () => void
    isDisabledInc: boolean
    isDisabledReset: boolean
}


export const CounterRemote: FC<CounterRemoteType>= (props) => {
    const {
        incScore,
        resetScore,
        isDisabledInc,
        isDisabledReset
    } = props
    return (
        <div className={s.buttons}>
            <Button name='inc' onClickHandler={incScore} disabled={isDisabledInc}/>
            <Button name='reset' onClickHandler={resetScore} disabled={isDisabledReset}/>
        </div>
    );
};

