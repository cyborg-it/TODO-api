const entryDataReducer = (state={},action) => {
    switch (action.type) {
        case "SET_ENTRY_DATA":
            return action.payload
        default:
            return state;
    }
}

export default entryDataReducer;