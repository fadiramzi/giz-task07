import React, {Component} from 'react';
import Product from "./Product";
import {products} from "./componentsData";
import SearchInput from "./SearchInput";
import Button from "./Button";
import InputName from "./InputName";
import InputPrice from "./InputPrice";

class ProductsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsArr: products,
            name: '',
            price: ''
        }}
    setStateOfParent = (updatedState) => {
        this.setState({
            productsArr: updatedState
        });
    }
    setStateOfNameInput = (updatedState) => {
    this.setState({
        name: updatedState
    });
    }
    setStateOfPriceInput = (updatedState) => {
    this.setState({
        price: updatedState
    });
    }
        render() {
        return (
            <>
                <div className="inputs-container">
                    <SearchInput setStateOfParent = {this.setStateOfParent} productsToSearchThrough={this.state.productsArr} placeholder="Search Products"/>
                    <div className="right-container">
                        <InputName placeholder="Name" nameVal={this.state.name} setStateOfInput = {this.setStateOfNameInput}/>
                        <InputPrice placeholder="Price" priceVal={this.state.price} setStateOfInput = {this.setStateOfPriceInput}/>
                        <Button titleofButton="Add New" products={this.state.productsArr} productNameInput={this.state.name} productPriceInput={this.state.price} setStateOfParent = {this.setStateOfParent}/>
                    </div>
                </div>
                <Product productsToDisplay={this.state.productsArr} />
            </>
        );
    }
}

ProductsPage.propTypes = {};

export default ProductsPage;