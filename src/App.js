import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      log: true,
    };
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        log: !prevState.log,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>The user is logged {this.state.log ? "in" : "out"} </h1>

        <button onClick={this.handleClick}>Change!</button>
      </div>
    );
  }
}

export default App;
