import {combineReducers, legacy_createStore} from 'redux';
import {valueReducer} from './value-reducer';
import {settingsReducer} from './settings-reducer';


const rootReducer = combineReducers({
    counterValue: valueReducer,
    settings: settingsReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>