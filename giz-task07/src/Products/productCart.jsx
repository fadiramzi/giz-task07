import React from 'react'
import './style.css'
export default function productCart(props) {
return (
<div className="cartWrapper">
   <div className="img" style={{
          backgroundImage :"url(" + props.src + ")"
   }}></div>
    <span className="category">Sneakers</span>
    <div className="nameAndPrice">
        <span className="name">{props.name}</span>
        <span className="price">{props.price}$</span>
    </div>
    <span className="addToCart">Add to Cart</span>
</div>
)
}