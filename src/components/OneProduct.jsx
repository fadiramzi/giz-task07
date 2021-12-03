import React from 'react'
import './Home.css'

const OneProduct = (props) => {
    return (
                      <div className="Card">
                        <img className="img" src={props.image} alt="" />   
                        <div>
                        <div className="item">
                          <div className="p" >
                            <h6>{ props.description }</h6>
                            <h1>{ props.name }</h1>
                          </div>
                          <div>
                            <h2>{ props.price }</h2>
                          </div>
                        </div>
                        <button className="Btn">Add To cart</button>
                        </div>
                      </div>
    )
}

export default OneProduct
