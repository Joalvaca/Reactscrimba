import React from "react";
import ReactChildren from "./ReactChildren";

function ReactChildrenMain() {
  return (
    <main>
      <h1>Welcome!</h1>
      <ReactChildren>
        <p>"Don't miss out!"</p>
        <p>"Don't miss out!"</p>
      </ReactChildren>
      <ReactChildren>
        <p>
          This is probably the best site you've ever come across. I'm glad
          you're here to witness the magnificence of this website right now.
        </p>
      </ReactChildren>
      <ReactChildren>
        <p>"Don't miss out!"</p>
        <p>"Don't miss out!"</p>
      </ReactChildren>

      <ReactChildren>
        <p>
          Here's some more unforgettable content. Lorem ipsum something or
          other.
        </p>
      </ReactChildren>

      <ReactChildren>
        <p>"Don't miss out!"</p>
        <p>"Don't miss out!"</p>
      </ReactChildren>
    </main>
  );
}

export default ReactChildrenMain;
