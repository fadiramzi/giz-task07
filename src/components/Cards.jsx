import React from 'react'

function Card(props) {
    return (
        <div className="productsCard">
      <img src={props.item.img} alt="" />   
      <div>
      <div className="Flex">
        <div className="Flex1" >
          <h4>{ props.item.type }</h4>
          <h1>{ props.item.name }</h1>
        </div>
        <div>
          <h2>{ props.item.price }</h2>
        </div>
      </div>
      <button className="productBtn">Add to cart</button>
      </div>
      </div>
    )
}

export default Card;
