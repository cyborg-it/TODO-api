export const demoReducerAction = (data) => {
    return {
        type:'SWITCH_OFF_THE_BUTTON',
        payload:data
    }
}

export const entryTitleDataReducerAction = (data) => {
    return {
        type:"SET_ENTRY_TITLE_DATA",
        payload:data
    }
}

export const entryDescriptionDataReducerAction = (data) => {
    return {
        type:"SET_ENTRY_DESCRIPTION_DATA",
        payload:data
    }
}

export const todoListReducerAction = (data) => {
    return {
        type:"GET_TODO_LIST",
        payload:data
    }
}