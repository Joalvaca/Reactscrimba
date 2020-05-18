import React from "react";
import Product from "./Product";
import vschoolProducts from "./VschoolProducts.js";

function Main() {
  const productComponents = vschoolProducts.map((item) => (
    <Product key={item.id} vschoolProducts={item} />
  ));

  return <div>{productComponents}</div>;
}

export default Main;
