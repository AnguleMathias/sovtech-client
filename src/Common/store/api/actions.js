// action types
export const MAKE_API_CALL = "MAKE_API_CALL";
export const API_ERROR = "API_ERROR";

export const makeApiCall = () => {
  return { type: MAKE_API_CALL };
};

export const apiError = (error) => {
  return { type: API_ERROR, error };
};
