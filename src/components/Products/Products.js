import React from "react";

function Products(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.products.name}</h1>
      <h1>{props.products.price}</h1>
      <h1>{props.products.description}</h1>
    </div>
  );
}

export default Products;
