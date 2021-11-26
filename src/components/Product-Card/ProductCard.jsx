import React from 'react'
import './StyleProductCard.css'
import picture from '../../Images/Image1.png'

//stateless component
function ProductCard(props) {
    return (
        <div className="product-card">
            <img src={picture} alt="product" width="100%"/>
            <span className="span">Sneakers</span>
            <div className="card-details">
                <h4>{props.product.name}</h4>
                <span>{props.product.price}</span>
            </div>
            <button>Add to Cart</button>
        </div>
    )
}

export default ProductCard
