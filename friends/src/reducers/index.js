import { ERROR, SUCCESS, LOADING } from "../actions";

const initialState = {
  id: null,
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return state;
    case SUCCESS:
      return { ...state, friends: action.payload };
    case ERROR:
      return state;
    default:
      return state;
  }
};
