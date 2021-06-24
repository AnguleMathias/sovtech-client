import { combineReducers } from "redux";

import people from "./peopleReducer";

const allReducers = combineReducers({
  people,
});

export default allReducers;
