import { LOAD_PEOPLE_SUCCESS } from "./actions";
const initialState = {
  people: [],
};

const peopleReducer = (state = initialState, { type, people }) => {
  switch (type) {
    case LOAD_PEOPLE_SUCCESS:
      return people;
    default:
      return state;
  }
};

export default peopleReducer;
