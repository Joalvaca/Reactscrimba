import React from "react"
import "./App.css"
import Joke from "./components/Joke"

function App() {
  return (
    <div>
      <Joke question="kddd" joke="j" />
      <Joke question="atest" joke="b" />
      <Joke question="ctest" joke="c" />
      <Joke question="k" joke="j" />
    </div>
  )
}

export default App
