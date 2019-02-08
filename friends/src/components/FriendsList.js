import React from "react";
import Friends from "./Friends";
import { connect } from "react-redux";

const FriendsList = props => {
  return (
    <div className="item_container">
      {props.friends.map((friend, i) => {
        return <Friends key={`friends-${i}`} friend={friend} />;
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
