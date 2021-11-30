import React, { Component } from 'react'
import Button from './Button'
import shoose from '../static/images/shoose.jpg'
import '../static/style/product.css'

class Product extends Component {
  render() {
    return (
      <div className="product-component">
        <img src={shoose} alt="" />
        <div className="details">
          <div>
            <p>{this.props.product.name}</p>
            <p>{this.props.product.description}</p>
          </div>
          <div>
            <p>{this.props.product.prics}</p>
          </div>
        </div>
        <Button title="Add to Cart" />
      </div>
    )
  }
}
export default Product
