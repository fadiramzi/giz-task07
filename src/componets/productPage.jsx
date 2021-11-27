import React, { Component } from 'react'
import Button_add from './button_add';
import InputSearch from './input';
import '../mainStyle.css'
import Product from './product';
import Product0 from "../img/Product0.png"


class ProductMainPage extends React.Component {
    constructor(props){
        super();
        
        // products
        const productArr = [
            {
                name: "Air Max 95 U",
                type: "Sneakers",
                price: 99,
                img: Product0
            },
            {
                name: "Nike Blizzard",
                type: "Sneakers",
                price: 99,
                img: Product0
            },
            {
                name: "Nike Blizzard",
                type: "Sneakers",
                price: 99,
                img: Product0
            },
            {
                name: "Nike Blizzard",
                type: "Sneakers",
                price: 99,
                img: Product0
            },
        ];
        this.state={
            productsArray : productArr,
            filteredProducts: productArr
        }
        // binding
        this.addButton = this.addButton.bind(this)
        this.searchButton = this.searchButton.bind(this)
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
        
    }

    searchButton(e){
        let searchValue = e.target.value;
        let productsArrayCopy = this.state.productsArray;
        // Search---------
        if(!searchValue){
            this.setState({
                searchVal:e.target.value,
                filteredProducts:this.state.productsArray,
            })
            return;
        }
            let filtered = productsArrayCopy.filter((item) => {
                return item.name.includes(searchValue);
              });
            this.setState({
                searchVal:e.target.value,
                filteredProducts:filtered,
            })
    }

    render() {
        return (
            <div className="main-continer">
                <div className="menu-bar">
                    <div className="search-div">
                        <InputSearch content="Search Products" inputId="searchProduct" functionalty={this.searchButton} />
                    </div>
                    <div className="add-product">
                        <InputSearch content="Pricce" inputId="priceProduct" typeOf="number" minNumber={0} />
                        <InputSearch content="Name" inputId="nameProduct" typeOf="text" />
                        <InputSearch content="Type" inputId="typeProduct" typeOf="text" />
                        <Button_add content="Add New" onClickFunction={this.addButton} />
                    </div>
                </div>
                <div className='flex-products'>
                    {
                        this.state.filteredProducts.map((item)=>{
                            return <Product item={item} />
                        })
                    }
                </div>
            </div>
    )}
    componentDidMount(){
        console.log("Done")
    }
}

export default ProductMainPage;
