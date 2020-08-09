import axios from "axios";

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";

//Contains user action creator
export const fetchUsersRequest = (users) => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
    info: "Fetched data successfully",
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
    info: "Error fetching data",
  };
};
//Async action creator
//Makes use of thunk middleware- returns another function - it dosen't have  to be pure
//allowed to have sideeffects - such as async API calls, it receives dispatch method as argument
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchUsersFailure(errorMessage));
      });
  };
};
