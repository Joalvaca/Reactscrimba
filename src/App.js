import React from "react";
import "./App.css";
import Product from "./components/Products";
import Joke from "./components/Joke";
import Data from "./components/Data";

function App() {
  return (
    <div>
      <Joke question="a" joke="b" />
      <Joke question="a" joke="b" />
      <Joke question="a" joke="b" />
      <Joke question="a" joke="b" />
    </div>
  );
}

export default App;
