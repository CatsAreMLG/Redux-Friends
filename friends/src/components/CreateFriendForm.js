import React from "react";

class CreateFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", age: "" };
  }
  inputHandler = e => {
    this.setState({ [e.target.dataset.name]: e.target.value });
  };
  render() {
    return (
      <form onSubmit={_ => this.props.addFriend(this.state)}>
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

export default CreateFriendForm;
