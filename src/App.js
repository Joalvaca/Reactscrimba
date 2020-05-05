import React from "react";
import "./App.css";
// import Joke from "./components/Joke";
// import jokesData from "./components/jokesData";
import Data from "./components/Products/Data";
import Products from "./components/Products/Products";

// function App() {
//   let jokeComponents = jokesData.map((joke) => {
//     console.log(joke);
//     return (
//       <Joke question={joke.question} punchLine={joke.punchLine} key={joke.id} />
//     );
//   });

//   return <div>{jokeComponents}</div>;
// }

function App() {
  let products = Data.map((item) => {
    return <Products key={item.id} products={item} />;
  });

  return <div>{products}</div>;
}
export default App;
