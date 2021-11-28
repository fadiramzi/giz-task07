import React from "react";

const Product = (props)=>{
    return (
        <div className="menu-bar">
            <div>
                <img src= {props.item.img} />
                <p>{props.item.name}</p>
                <p>{props.item.type}</p>
                <p>{props.item.price} $</p>
            </div>
        </div>
        )
};

export default Product
