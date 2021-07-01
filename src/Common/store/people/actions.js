import * as fetchApi from "../../utils/peopleApi";

// action types
export const LOAD_PEOPLE_SUCCESS = "LOAD_PEOPLE_SUCCESS";
export const LOAD_PERSON_SUCCESS = "LOAD_PERSON_SUCCESS";

export const loadPeopleSucess = (people) => {
  return { type: LOAD_PEOPLE_SUCCESS, people };
};

export const loadPeople = (page) => {
  // console.log("page at actions:", page);
  return function (dispatch) {
    return fetchApi
      .fetchPeople(page)
      .then((people) => {
        dispatch(loadPeopleSucess(people));
      })
      .catch((error) => {
        console.log("error at actions:", error);
        throw error;
      });
  };
};
