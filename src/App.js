import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Code</h1>
      </div>
    );
  }
}
export default App;

class App extends React.Component {
  render() {
    return (
      <div>
        <Header username="Joel" />
      </div>
    );
  }
}

export default App;

class Header extends React.Component {
  render() {
    return <div>Hello, {this.props.username}</div>;
  }
}

export default Header;
