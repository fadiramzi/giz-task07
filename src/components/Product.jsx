import React, { Component } from 'react'
import Button from './Button'
import shoose from '../static/images/shoose.jpg'
import '../static/style/product.css'

class Product extends Component {
  render() {
    return (
      <div className="product-component background-white">
        
        <img src={shoose} alt="" />
        <div className="details">
          <div className="background-white">
            <p className="grey-text">{this.props.product.name}</p>
            <p>{this.props.product.description}</p>
          </div>
          <div className="background-white">
            <p className="grey-text">{this.props.product.prics}</p>
          </div>
        </div>
        <Button className="btn-cart" title="Add to Cart" />
      </div>
    )
  }
}
export default Product
