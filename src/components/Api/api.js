import React, { Component } from "react";

class Api extends Component {
  constructor() {
    super();
    this.state = {
      character: {},
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({ character: data, loading: false });
        },
        (error) => {
          this.setState({
            loading: false,
            error,
          });
        }
      );
  }

  render() {
    const { loading, character } = this.state;
    let text = loading ? "loading" : character.name;
    return (
      <div>
        <h1>{text} </h1>
      </div>
    );
  }
}

export default Api;
