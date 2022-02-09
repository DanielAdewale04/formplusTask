import CatData from "./data";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    catData: CatData,
})

export default allReducers;