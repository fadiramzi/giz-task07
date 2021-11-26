import React from 'react';

function Product(props) {
  return (
    <div className="product">
      <img className="product-image" src='favicon.ico' alt="product"/>
      <div className="title">
        <small>Sneakers</small>
        <h2>Air Max 95 U</h2>
        <small>$ 99</small>
      </div>
      <button className="product-button">Add to Cart</button>
    </div>
  );
}

export default Product;