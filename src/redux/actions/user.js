import api from "../../api";
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import setAuthorizationHeader from "../../utils/setAuthorizationHeader";

const token = "xxxxxxxxxxxxxxxxxxxxxxxxxxx";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const register = data => dispatch =>
  api.user.register(data).then(user => {
    localStorage.vPlayToken = token;
    localStorage.id = user.id;
    localStorage.firstName = user.first_name;
    localStorage.lastName = user.last_name;
    localStorage.location = user.location;
    localStorage.phoneNumber = user.phone_number;
    localStorage.isActive = user.is_active;
    localStorage.dateJoined = user.date_joined;

    setAuthorizationHeader(token);
    dispatch(userLoggedIn(user));
  });

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.vPlayToken = token;
    setAuthorizationHeader(token);
    dispatch(userLoggedIn(user));
  });

export const logout = () => dispatch => {
  localStorage.removeItem("vPlayToken");
  localStorage.removeItem("id");
  localStorage.removeItem("firstName");
  localStorage.removeItem("lastName");
  localStorage.removeItem("location");
  localStorage.removeItem("phoneNumber");
  localStorage.removeItem("isActive");
  localStorage.removeItem("dateJoined");
  setAuthorizationHeader();
  dispatch(userLoggedOut());
};
