import React from "react";
import Button from "./Button";
import ProductInfo from "./ProductInfo";
import ProductImage from "./ProductImage";

const Product = props => {
    return (
        <div className="product">
            <ProductImage image={props.image} />
            <ProductInfo title={props.title} price={props.price} />
            <Button text="Add to Card" class="btn-add" onClick={props.onClick} />
        </div>
    );
};

export default Product;