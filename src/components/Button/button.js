import React, { Component } from "react";

class Button extends Component {
  state = {
    count: 1,
  };

  add = () => {
    let add = this.state.count + 1;
    this.setState({ count: add });
  };

  sub = () => {
    let sub = this.state.count - 1;
    this.setState({ count: sub });
  };

  render() {
    let { count } = this.state;
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.sub}>subtract</button>
      </div>
    );
  }
}

export default Button;
