import React from "react";
import Card from "./Card";

function Main_1() {
  return (
    <div>
      <Card cardColor="red" height={100} width={100} />
      <Card cardColor="yellow" width={100} />
      <Card cardColor="blue" height={100} width={100} />
    </div>
  );
}
export default Main_1;
