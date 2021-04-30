export const demoReducerAction = (data) => {
    return {
        type:'SWITCH_OFF_THE_BUTTON',
        payload:data
    }
}

export const entryDataReducerAction = (data) => {
    return {
        type:"SET_ENTRY_DATA",
        payload:data
    }
}