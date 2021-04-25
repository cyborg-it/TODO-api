import { combineReducers } from "redux";
import demoReducer from "./demoReducer"

const allReducers = combineReducers({
    demoOne:demoReducer
})

export default allReducers;