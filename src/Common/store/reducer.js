import { combineReducers } from "redux";

import people from "./people/reducer";

const allReducers = combineReducers({
  people,
});

export default allReducers;
