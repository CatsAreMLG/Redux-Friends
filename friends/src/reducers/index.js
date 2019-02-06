import { ERROR, SUCCESS, LOADING } from "../actions";

const initialState = {
  id: null,
  fetchingFriends: false,
  friends: [],
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, fetchingFriends: true, friends: [] };
    case SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        error: null,
        friends: action.payload
      };
    case ERROR:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload,
        friends: []
      };
    default:
      return state;
  }
};
