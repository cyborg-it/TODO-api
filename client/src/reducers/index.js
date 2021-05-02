import { combineReducers } from "redux";
import demoReducer from "./demoReducer"
import {entryTitleDataReducer,entryDescriptionDataReducer} from './entryDataReducer'

import {todoListReducer} from './todoReducer'

const allReducers = combineReducers({
    demoOne:demoReducer,
    title:entryTitleDataReducer,
    description:entryDescriptionDataReducer,
    todoList:todoListReducer
})

export default allReducers;