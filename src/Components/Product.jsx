import React from 'react';
import shoose from '../images/shoose.jpg';

function Product(props) {
  return (
    <div className="product">
      <img className="product-image" src={shoose} alt="product"/>
      <div className="title">
        <small>{props.product.type}</small>
        <div className="product-desc">
          <h2>{props.product.caption}</h2>
          <small>{props.product.price}</small>
        </div>
      </div>
      <button className="product-button">Add to Cart</button>
    </div>
  );
}

export default Product;