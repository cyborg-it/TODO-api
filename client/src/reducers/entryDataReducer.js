const entryTitleDataReducer = (state={},action) => {
    switch (action.type) {
        case "SET_ENTRY_TITLE_DATA":
            return action.payload
        default:
            return state;
    }
}

const entryDescriptionDataReducer = (state={},action) => {
    switch (action.type) {
        case "SET_ENTRY_DESCRIPTION_DATA":
            return action.payload
        default:
            return state;
    }
}

export {
    entryTitleDataReducer,
    entryDescriptionDataReducer
};