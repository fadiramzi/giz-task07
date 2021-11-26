import React from "react";
import Button from "./Button";

function Product(props) {
  return (
    <div>
      <img src="./shoe-image.png" alt="Shoe" />
      <h3>{props.productName}</h3>
      <h4>${props.productPrice}</h4>
      <Button text="Add to Cart" />
    </div>
  );
}

export default Product;
