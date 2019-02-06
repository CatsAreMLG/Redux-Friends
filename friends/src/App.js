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
      friends: [],
      id: null,
      update: false
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/api/friends").then(res => {
      this.setState({ friends: res.data });
    });
  }
  addFriend = friend => {
    axios.post("http://localhost:5000/api/friends", friend).then(res => {
      this.setState({ friends: res.data });
    });
  };
  setId = id => {
    this.setState({
      id,
      update: true
    });
  };
  updateFriend = friend => {
    axios
      .put(`http://localhost:5000/api/friends/${this.state.id}`, friend)
      .then(res => {
        this.setState({ friends: res.data, update: false });
      });
  };
  render() {
    return (
      <div className="App">
        {!this.state.update ? (
          <CreateFriendForm addFriend={this.addFriend} />
        ) : (
          <>
            <h1>Edit</h1>
            <UpdateFriendForm updateFriend={this.updateFriend} />
          </>
        )}
        <FriendsList
          setId={this.setId}
          friends={this.state.friends}
          id={this.state.id}
        />
      </div>
    );
  }
}

export default App;
