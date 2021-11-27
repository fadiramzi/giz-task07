import React, { Component } from 'react'
import Button_add from './button_add';
import InputSearch from './input';
import '../mainStyle.css'
import Product from './product';
import Product0 from "../img/Product0.png"


class ProductMainPage extends React.Component {
    constructor(props){
        super();
        // button
        // inputs search
        
        // products
        this.state={
            productsArray : [
                {
                    name: "Air Max 95 U",
                    type: "Sneakers",
                    price: "$ 99",
                    img: Product0
                },
                {
                    name: "Nike Blizzard",
                    type: "Sneakers",
                    price: "$ 99",
                    img: Product0
                },
            ]
        }
        
        // binding
        this.addButton = this.addButton.bind(this)
    }

    addButton(e){
        let nameProduct = document.getElementById("nameProduct").value;
        let priceProduct = document.getElementById("priceProduct").value;
        let typeProduct = document.getElementById("typeProduct").value;

        let productsArrayCopy = this.state.productsArray;
        productsArrayCopy.push(
            {
                name:nameProduct,
                price:priceProduct,
                type: typeProduct,
                img: Product0
            });

        this.setState({
            productsArray: productsArrayCopy})

        console.log("I'm Worging")
        
    }
    render() {
        return (
            <div className="main-continer">
                <div className="menu-bar">
                    <div className="search-div">
                        <InputSearch content="Search Products" inputId="searchProduct" />
                    </div>
                    <div className="add-product">
                        <InputSearch content="Pricce" inputId="priceProduct" />
                        <InputSearch content="Name" inputId="nameProduct" />
                        <InputSearch content="Type" inputId="typeProduct" />
                        <Button_add content="Add New" onClickFunction={this.addButton} />
                    </div>
                </div>
                <div className='flex-products'>
                    {
                        this.state.productsArray.map((item)=>{
                            // console.log(item.img)
                            return <Product item={item} />
                        })
                    }
                </div>
            </div>
    )}
}

// {/* <h1>Hello World</h1> */}

// const styles = StyleSheet.create({
// })

export default ProductMainPage;
