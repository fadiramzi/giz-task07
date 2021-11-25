import React from "react";
import image from "../img.png";
export default function Product(props) {
  return (
    <div>
      <div>
        <img src={image} alt="image" />
      </div>
      <div>
        <span>{props.product.type}</span>
      </div>
      <div>
        <p>{props.product.title}</p>
        <p>{props.product.price}</p>
      </div>
      <div>
        <button>Add to cart</button>
      </div>
    </div>
  );
}
