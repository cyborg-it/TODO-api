const demoReducer = (state={},action) => {
    switch (action.type) {
        case 'SWITCH_OFF_THE_BUTTON':
            return action.payload
        default:
            return state
    }
} 

export default demoReducer;