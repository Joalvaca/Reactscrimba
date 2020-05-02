import React from "react"
import "./Joke"

function Joke(props) {
  return (
    <div className="joke">
      <h1>question:{props.question}</h1>
      <h1>joke:{props.joke}</h1>
    </div>
  )
}

export default Joke
