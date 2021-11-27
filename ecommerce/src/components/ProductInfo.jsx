import React from "react";

const ProductInfo = props => {
    return (
        <div className="product-info">
            <h3 className="product-title">{props.title}</h3>
            <p className="product-price">{props.price}</p>
        </div>
    );
};

export default ProductInfo;