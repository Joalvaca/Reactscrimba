import React, { Component } from "react";

class Logged extends Component {
  constructor() {
    super();
    this.setState = { log: true };
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        log: !prevState.log,
      };
    });
  };

  render() {
    let buttonText = this.state.log ? "in" : "out";
    return (
      <div>
        <h1>The user is logged {buttonText} </h1>

        <button onClick={this.handleClick}>Change!</button>
      </div>
    );
  }
}

export default Logged;
