type ValueType = {
    startValue: number
    maxValue: number
    value: number
}

type ValueReducerType =
    ReturnType<typeof incScoreAC>
    | ReturnType<typeof resetScoreAC>
    | ReturnType<typeof changeStartValueAC>
    | ReturnType<typeof changeMaxValueAC>

const initialState: ValueType = {
    startValue: 0,
    maxValue: 5,
    value: 0
}

export const valueReducer = (state = initialState, action: ValueReducerType): ValueType => {
    switch (action.type) {
        case 'INCREMENT-SCORE':
            return {...state, value: state.value + 1}
        case 'RESET-SCORE':
            return {...state, value: state.startValue}
        case 'CHANGE-START-VALUE':
            return {...state, startValue: action.payload.startValue}
        case 'CHANGE-MAX-VALUE':
            return {...state, maxValue: action.payload.maxValue}
        default:
            return state
    }
}

export const incScoreAC = () => {
    return {
        type: 'INCREMENT-SCORE'
    } as const
}

export const resetScoreAC = () => {
    return {
        type: 'RESET-SCORE'
    } as const
}

export const changeStartValueAC = (startValue: number) => {
    return {
        type: 'CHANGE-START-VALUE',
        payload: {
            startValue
        }
    } as const
}

export const changeMaxValueAC = (maxValue: number) => {
    return {
        type: 'CHANGE-MAX-VALUE',
        payload: {
            maxValue
        }
    } as const
}
