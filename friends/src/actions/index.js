import axios from "axios";

export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

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
