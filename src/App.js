import React from "react";
import "./App.css";
import Joke from "./components/Joke";

function App() {
  return (
    <div>
      <Joke question="kddd" joke="j" />
      <Joke question="a" joke="b" />
      <Joke question="c" joke="c" />
      <Joke question="k" joke="j" />
    </div>
  );
}

export default App;
