import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";

function App() {

    const [value, setValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)

    const incScore = () => {
        setValue(value + 1)
    }

    const resetScore = () => {
        setValue(0)
    }

    return (
        <div>
            <Counter value={value} incScore={incScore} resetScore={resetScore} maxValue={maxValue}/>
        </div>
    );
}

export default App;
