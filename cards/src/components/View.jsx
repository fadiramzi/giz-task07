import React from "react";
import img from "../shoes.png";




function ViewCards(props) {
  return (
    <div class="card">
        <img src={img} alt="#" />
        <h1>{props.product.name}</h1>
        <p>{props.product.type}</p>
        <p class="price">{props.product.price}</p>
        <p><button>Add to Cart</button></p>
    </div>
  );
}


export default ViewCards;