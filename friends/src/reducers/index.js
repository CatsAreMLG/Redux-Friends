import { ERROR, SUCCESS, LOADING, DELETE, EDITING } from "../actions";

const initialState = {
  id: null,
  fetchingFriends: false,
  friends: [],
  error: null,
  editingFriend: false
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
        friends: action.payload,
        id: null
      };
    case DELETE:
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
    case EDITING:
      return {
        ...state,
        editingFriend: true,
        id: action.payload
      };
    default:
      return state;
  }
};
