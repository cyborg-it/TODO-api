const todoListReducer = (state=[],action) => {
    switch (action.type) {
        case "GET_TODO_LIST":
            return action.payload
    
        default:
            return state;
    }
}

export {
    todoListReducer
}