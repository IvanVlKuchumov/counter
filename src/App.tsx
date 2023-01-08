import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {

    const [startValue, setStartValue] = useState(0)
    const [value, setValue] = useState(startValue)
    const [maxValue, setMaxValue] = useState(5)
    const [setting, setSetting] = useState(false)

    const incScore = () => {
        setValue(value + 1)
    }

    const resetScore = () => {
        setValue(startValue)
    }

    const changeMaxValue = (value: number) => {
        setMaxValue(value)
    }

    const changeMinValue = (value: number) => {
        setStartValue(value)
    }

    const changeSettingStatus = (status: boolean) => {
        setSetting(status)
    }

    return (
        <div className={'App'}>
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                changeMaxValue={changeMaxValue}
                changeMinValue={changeMinValue}
                setting={setting}
                changeSettingStatus={changeSettingStatus}
                resetScore={resetScore}/>
            <Counter
                value={value}
                incScore={incScore}
                resetScore={resetScore}
                maxValue={maxValue}
                setting={setting}
                startValue={startValue}/>
        </div>
    );
}

export default App;
