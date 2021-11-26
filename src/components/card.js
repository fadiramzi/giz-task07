import React from 'react';


function Product(props) {
    return( 
    <div style={{backgroundColor:"white",}}>
    <img src="/shoes" alt="image"></img>
    <h3 >{props.product.name}</h3>
    <span className="price">{props.product.price}</span>
    </div>
    )
}

export default Product