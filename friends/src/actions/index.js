import axios from "axios";

import store from "../config/store";

export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const DELETE = "DELETE";
export const EDITING = "EDITING";

export const fetchFriends = _ => dispatch => {
  dispatch({ type: LOADING });
  axios
    .get(`http://localhost:5000/api/friends`)
    .then(res => {
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: "Error 404: Cannot find friends"
      });
    });
};
export const deleteFriend = id => dispatch => {
  dispatch({ type: LOADING });
  axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(res => {
      dispatch({ type: DELETE, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: "Error 404: Cannot delete friend"
      });
    });
};
export const editFriend = friend => dispatch => {
  const id = store.getState().friendsReducer.id;
  dispatch({ type: LOADING });
  axios
    .put(`http://localhost:5000/api/friends/${id}`, friend)
    .then(res => {
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: "Error 404: Cannot edit friend"
      });
    });
};
export const editingFriend = id => dispatch => {
  dispatch({ type: EDITING, payload: id });
};
