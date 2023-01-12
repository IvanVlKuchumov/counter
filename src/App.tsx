import React, {useEffect, useState} from 'react';
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
    const addSettingsValueAtLocalStorage = () => {
        localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
        localStorage.setItem('counterStartValue', JSON.stringify(startValue))
    }

        useEffect(addSettingsValueAtLocalStorage, [startValue, maxValue])

    const getSettingsValue = () => {
        const maxValueAsString = localStorage.getItem('counterMaxValue')
        const startValueAsString = localStorage.getItem('counterStartValue')
        if (maxValueAsString) {
            const newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }
        if (startValueAsString) {
            const newStartValue = JSON.parse(startValueAsString)
            setStartValue(newStartValue)
        }
    }

        useEffect(getSettingsValue, [])


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

    const checkSettings = startValue >= 0 && maxValue > startValue
    const message = checkSettings ? 'enter values and press "set"' : 'Incorrect value!'

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
                startValue={startValue}
                message={message}
            />
        </div>
    );
}

export default App;
