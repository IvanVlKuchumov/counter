type SettingsType = {
    isSettingMode: boolean
}

type SettingsReducerType = ReturnType<typeof toggleSettingModeAC>

const initialState: SettingsType = {
    isSettingMode: false
}

export const settingsReducer = (state = initialState, action: SettingsReducerType): SettingsType => {
    if (action.type === 'TOGGLE-SETTING-MODE') {
        return {isSettingMode: action.payload.isSetting}
    } else {
        return state
    }
}

export const toggleSettingModeAC = (isSetting: boolean) => {
    return {
        type: 'TOGGLE-SETTING-MODE',
        payload: {
            isSetting
        }
    } as const
}