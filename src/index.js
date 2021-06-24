import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ApolloProvider } from "@apollo/client";

import "./index.css";
import configureStore from "./Common/store/configureStore";
import PageTemplate from "./Common/components/templates/PageTemplate";
import reportWebVitals from "./reportWebVitals";

const store = configure();

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        <PageTemplate />
      </ApolloProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
