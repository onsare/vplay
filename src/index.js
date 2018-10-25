import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import setAuthorizationHeader from "./utils/setAuthorizationHeader";
import { userLoggedIn } from "./redux/actions/user";

import App from "./App";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

if (localStorage.vPlayToken) {
  setAuthorizationHeader(localStorage.vPlayToken);

  const user = {
    id: localStorage.id,
    firstName: localStorage.firstName,
    lastName: localStorage.lastName,
    location: localStorage.location,
    phoneNumber: localStorage.phoneNumber,
    active: localStorage.isActive
  };
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
