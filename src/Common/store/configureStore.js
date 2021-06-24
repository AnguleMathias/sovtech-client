import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

import client from "../utils/client";

const configureStore = (initialState) =>
  createStore(
    reducer,
    initialState,
    applyMiddleware(client.middleware(), thunk)
  );

export default configureStore;
