import React from "react";
import Friends from "./Friends";
import { connect } from "react-redux";

const FriendsList = props => {
  return (
    <div>
      {props.friends.map((friend, i) => {
        return (
          <Friends
            key={`friends-${i}`}
            setId={props.setId}
            deleteFriend={props.deleteFriend}
            friend={friend}
          />
        );
      })}
    </div>
  );
};

const mstp = state => {
  return {
    friends: state.friendsReducer.friends
  };
};

export default connect(mstp)(FriendsList);
