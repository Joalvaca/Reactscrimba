import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      total: "",
    };
  }

  handlechange = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count,
      };
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  add = (e) => {
    let x = this.prevState.count + this.state.total;
    this.setState({ result: x });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handlechange}>Click</button>

        <form>
          <input
            type="text"
            name="total"
            value={this.state.total}
            onChange={this.handleChange}
          ></input>
        </form>
      </div>
    );
  }
}

export default App;
