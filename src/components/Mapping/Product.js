import React from "react";

function Product(props) {
  return (
    <div>
      <h2>{props.vschoolProducts.name}</h2>
      <p>
        {props.vschoolProducts.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
        - {props.vschoolProducts.description}
      </p>
    </div>
  );
}

export default Product;
