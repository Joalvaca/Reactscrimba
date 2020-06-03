import React, { useState } from "react";

function Hooks() {
  const [value] = useState("Yes");

  return (
    <div>
      j<h1>important? {value}</h1>
    </div>
  );
}

// class useState extends Component {
//   constructor() {
//     super();
//     this.state = {
//       answer: "Yes",
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Is state important to know? {this.state.answer}</h1>
//       </div>
//     );
//   }
// }

export default Hooks;
