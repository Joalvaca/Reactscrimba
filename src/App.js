import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
    };
  }
  render() {
    let log = this.state.loggedIn;
    return (
      <div>
        <h1>user is logged {log ? "in" : "out"}</h1>
      </div>
    );
  }
}

export default App;
