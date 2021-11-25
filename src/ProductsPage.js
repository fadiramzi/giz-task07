import React, {Component} from 'react';
import Input from "./Input";
import Product from "./Product";
import {products} from "./componentsData";
import SearchInput from "./SearchInput";
import Button from "./Button";

class ProductsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsArr: products
        }}
    setStateOfParent = (updatedProducts) => {
        this.setState({
            productsArr: updatedProducts
        });
    }
        render() {
        return (
            <>
                <div className="inputs-container">
                    <SearchInput setStateOfParent = {this.setStateOfParent} productsToSearchThrough={this.state.productsArr} placeholder="Search Products"/>
                    <div className="right-container">
                        <Input placeholder="Name"/>
                        <Input placeholder="Price"/>
                        <Button titleofButton="Add New" products={this.state.productsArr} setStateOfParent = {this.setStateOfParent}/>
                    </div>
                </div>
                <Product productsToDisplay={this.state.productsArr} />
            </>
        );
    }
}

ProductsPage.propTypes = {};

export default ProductsPage;