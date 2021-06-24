import { fetchPeople } from "../../utils/peopleApi";

// action types
export const LOAD_PEOPLE_SUCCESS = "LOAD_PEOPLE_SUCCESS";
export const LOAD_PERSON_SUCCESS = "LOAD_PERSON_SUCCESS";

export const loadPeopleSucess = (people) => {
  return { type: LOAD_PEOPLE_SUCCESS, people };
};

export const loadPeople = (page) => {
  return function (dispatch) {
    return fetchPeople
      .getPeople(page)
      .then((people) => {
        console.log(people);
        dispatch(loadPeopleSucess(people));
      })
      .catch((error) => {
        throw error;
      });
  };
};
