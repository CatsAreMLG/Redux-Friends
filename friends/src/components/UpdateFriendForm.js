import React from "react";
import { connect } from "react-redux";

import { editFriend } from "../actions";
class UpdateFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", age: "" };
  }
  inputHandler = e => {
    this.setState({ [e.target.dataset.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.editFriend(this.state);
    this.setState({ name: "", email: "", age: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={e => this.inputHandler(e)}
          type="text"
          placeholder="Name..."
          data-name="name"
          value={this.state.name}
        />
        <input
          onChange={e => this.inputHandler(e)}
          type="number"
          placeholder="Age..."
          data-name="age"
          value={this.state.age}
        />
        <input
          onChange={e => this.inputHandler(e)}
          type="email"
          placeholder="Email..."
          data-name="email"
          value={this.state.email}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default connect(
  null,
  { editFriend }
)(UpdateFriendForm);
