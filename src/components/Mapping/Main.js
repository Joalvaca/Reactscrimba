import React from "react";
import Product from "./Product";
import vschoolProducts from "./vschoolProducts";

function Main() {
  const productComponents = vschoolProducts.map((item) => (
    <Product key={item.id} product={item} />
  ));

  return <div>{productComponents}</div>;
}

export default Main;
