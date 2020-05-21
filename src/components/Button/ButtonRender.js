import React from "react";

function ButtonRender(props) {
  return (
    <div>
      <button onClick={props.onAdd}>add</button>
      <button onClick={props.onSub}>subtract</button>
    </div>
  );
}

export default ButtonRender;
