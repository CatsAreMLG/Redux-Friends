import React from "react";
import { connect } from "react-redux";

import { addFriend } from "../actions";

class CreateFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", age: "" };
  }
  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addFriend(this.state);
    this.setState({ name: "", email: "", age: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.inputHandler}
          type="text"
          placeholder="Name..."
          name="name"
          value={this.state.name}
          required
        />
        <input
          onChange={this.inputHandler}
          type="number"
          placeholder="Age..."
          name="age"
          value={this.state.age}
          required
        />
        <input
          onChange={this.inputHandler}
          type="email"
          placeholder="Email..."
          name="email"
          value={this.state.email}
          required
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addFriend }
)(CreateFriendForm);
