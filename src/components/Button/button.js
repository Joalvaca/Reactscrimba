import React, { Component } from "react";

class Button extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  handlechange = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handlechange}>Click</button>
      </div>
    );
  }
}

export default Button;
