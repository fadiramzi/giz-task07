import React from "react";

const ProductImage = props => {
    return (
        <div className="product-image">
            <img src={props.image} alt="product" />
        </div>
    );
}

export default ProductImage;