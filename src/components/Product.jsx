import React, { Component } from 'react';
import Button from "./Button";
import shoose from '../static/images/shoose.jpg'

class Product extends Component {
    render() { 
        return (
            <div class="product">
                <img src={shoose} alt=""/>
                <div class="details">
                    <div>
                        <p>{this.props.name}</p>
                        <p>{this.props.description}</p>
                    </div>
                    <div>
                        <p>{this.props.prics}</p>
                    </div>

                </div>
                <Button title="Add to Cart"/>
            </div>
          );
    }
}
export default Product;