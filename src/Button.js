import React, {Component} from 'react';
import './styles/input.css'

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:props.products
        }
        this.addProduct = this.addProduct.bind(this)
    }
    addProduct() {
        let tempProducts = this.props.products
        tempProducts.push({
            name:"Eye Liner",
            price:"$99",
            description:"MakeUp"
        })
        this.setState({
            products: this.props.setStateOfParent(tempProducts)
        })
    }

    render() {
        return (
            <button onClick={this.addProduct}>{this.props.titleofButton}</button>
        );
    }
}

Button.propTypes = {};

export default Button;