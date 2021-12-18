//  split it into smaller components
// button
// price
// img

import React from 'react';
import './css/product.css';

function Product(props) {
    return (
        <div className="my-product">
            <img src={props.item.img} alt={props.item.name}/>
            <h3>{props.item.name}</h3>
            <button>Add to Cart</button>
            <p className="price">${props.item.price}</p>
        </div>
    );
}

export default Product;
