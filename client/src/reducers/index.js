import { combineReducers } from "redux";
import demoReducer from "./demoReducer"
import entryDataReducer from './entryDataReducer'

const allReducers = combineReducers({
    demoOne:demoReducer,
    entryData:entryDataReducer
})

export default allReducers;