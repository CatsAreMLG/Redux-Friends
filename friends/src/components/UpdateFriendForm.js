import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import store from "../config/store";

import { editFriend } from "../actions";
class UpdateFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", age: "" };
  }
  componentDidMount() {
    const id = store.getState().friendsReducer.id;
    axios.get(`http://localhost:5000/api/friends/${id}`).then(res => {
      this.setState({
        name: res.data.name,
        email: res.data.email,
        age: res.data.age
      });
    });
  }
  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
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
          onChange={this.inputHandler}
          type="text"
          placeholder="Name..."
          name="name"
          value={this.state.name}
        />
        <input
          onChange={this.inputHandler}
          type="number"
          placeholder="Age..."
          name="age"
          value={this.state.age}
        />
        <input
          onChange={this.inputHandler}
          type="email"
          placeholder="Email..."
          name="email"
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
