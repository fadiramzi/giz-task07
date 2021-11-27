import React from "react";

const ProductInfo = props => {
    return (
        <div className="product-info">
            <p className="product-title">{props.title}</p>
            <p className="product-price">{props.price}</p>
        </div>
    );
};

export default ProductInfo;