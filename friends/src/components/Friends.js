import React from "react";

const Friends = props => {
  return (
    <div>
      <div>{props.friend.name}</div>
      <div>{props.friend.age}</div>
      <div>{props.friend.email}</div>
    </div>
  );
};

export default Friends;
