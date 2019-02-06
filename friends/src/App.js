import React, { Component } from "react";
import axios from "axios";

import FriendsList from "./components/FriendsList";
import CreateFriendForm from "./components/CreateFriendForm";
import UpdateFriendForm from "./components/UpdateFriendForm";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/api/friends").then(res => {
      this.setState({ friends: res.data });
    });
  }
  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
