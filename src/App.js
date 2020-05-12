import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <h1>hi</h1>
        <form>
          <input
            name="firstName"
            value={this.state.firstName}
            type="text"
            placeholder="first name"
            onChange={this.handleChange}
          ></input>
          <input
            name="lastName"
            type="text"
            value={this.state.lastName}
            placeholder="last name"
            onChange={this.handleChange}
          ></input>
          <h1>
            {this.state.firstName} {this.state.lastName}
          </h1>
        </form>
      </div>
    );
  }
}

export default App;
