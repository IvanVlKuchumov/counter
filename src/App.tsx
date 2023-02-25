import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';

function App() {


    const value = useSelector<AppRootStateType, number>(state => state.counterValue.value)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counterValue.maxValue)
    const startValue = useSelector<AppRootStateType, number>(state => state.counterValue.startValue)
    const isSetting = useSelector<AppRootStateType, boolean>(state => state.settings.isSettingMode)

    // const addSettingsValueAtLocalStorage = () => {
    //     localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
    //     localStorage.setItem('counterStartValue', JSON.stringify(startValue))
    // }
    //
    // const getSettingsValue = () => {
    //     const maxValueAsString = localStorage.getItem('counterMaxValue')
    //     const startValueAsString = localStorage.getItem('counterStartValue')
    //
    //     if (maxValueAsString) {
    //         const newMaxValue = +maxValueAsString
    //         setMaxValue(newMaxValue)
    //     }
    //
    //     if (startValueAsString) {
    //         const newStartValue = +startValueAsString
    //         setStartValue(newStartValue)
    //     }
    // }
    //
    // useLayoutEffect(getSettingsValue, [])
    // useEffect(addSettingsValueAtLocalStorage, [startValue, maxValue])

    const checkSettings = startValue >= 0 && maxValue > startValue
    const message = checkSettings ? 'Enter values and press "Set"' : 'Incorrect value!'

    return (
        <div className={'App'}>
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                setting={isSetting}
            />
            <Counter
                value={value}
                maxValue={maxValue}
                isSetting={isSetting}
                startValue={startValue}
                message={message}
            />
        </div>
    );
}

export default App;
