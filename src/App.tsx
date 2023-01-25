import {useEffect, useLayoutEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {

    const [startValue, setStartValue] = useState(0)
    const [value, setValue] = useState(startValue)
    const [maxValue, setMaxValue] = useState(5)
    const [isSetting, setIsSetting] = useState(false)

    const addSettingsValueAtLocalStorage = () => {
        localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
        localStorage.setItem('counterStartValue', JSON.stringify(startValue))
    }

    useEffect(addSettingsValueAtLocalStorage, [startValue, maxValue])

    const getSettingsValue = () => {
        const maxValueAsString = localStorage.getItem('counterMaxValue')
        const startValueAsString = localStorage.getItem('counterStartValue')

        if (maxValueAsString) {
            const newMaxValue = +maxValueAsString
            setMaxValue(newMaxValue)
        }

        if (startValueAsString) {
            const newStartValue = +startValueAsString
            setStartValue(newStartValue)
        }
    }

    useLayoutEffect(getSettingsValue, [])

    const checkSettings = startValue >= 0 && maxValue > startValue
    const message = checkSettings ? 'enter values and press "set"' : 'Incorrect value!'

    return (
        <div className={'App'}>
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                changeMaxValue={setMaxValue}
                changeMinValue={(value: number) => {setStartValue(value)}}
                setting={isSetting}
                changeSettingStatus={(status: boolean) => {setIsSetting(status)}}
                resetScore={() => {setValue(startValue)}}/>
            <Counter
                value={value}
                incScore={() => setValue(value + 1)}
                resetScore={() => {setValue(startValue)}}
                maxValue={maxValue}
                setting={isSetting}
                startValue={startValue}
                message={message}
            />
        </div>
    );
}

export default App;
