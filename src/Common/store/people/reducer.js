import { LOAD_PEOPLE_SUCCESS } from "./actions";

const initialState = {
  people: [],
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PEOPLE_SUCCESS:
      return action.people;
    default:
      return state;
  }
};

export default peopleReducer;
