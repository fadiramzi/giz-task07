import React, { Component } from 'react';
import MyButton from './MyButton'
import MyInput from './MyInput';
import Product from './Product';
import './css/productsPage.css';
import iphone from './css/iphone.jpg';
import iphone3g from './css/iphone3g.jpg';
import iphone4 from './css/iphone4.jpg';

class ProductsPage extends React.Component{
    constructor()
    {
        // state
        // searchValue
        // priceValue
        // nameValue
        // binding for any func used inside event hander
        super();
        this.state = {
            searchVal:'',
            name: '',
            price: '',
            // filteredProducts:[],
            products:[
                { name: "iPhone", price: 99, img: iphone, },
                { name: "iPhone 3G", price: 9, img: iphone3g, },
                { name: "iPhone 4", price: 20, img: iphone4,},
            ],
            filteredProducts:[
                { name: "iPhone", price: 99, img: iphone, },
                { name: "iPhone 3G", price: 9, img: iphone3g, },
                { name: "iPhone 4", price: 20, img: iphone4,},
            ],
        }
        this.onSearchChange= this.onSearchChange.bind(this)
        this.inputName= this.inputName.bind(this)
        this.inputPrice= this.inputPrice.bind(this)
        this.addProduct= this.addProduct.bind(this)

    }
    onSearchChange(e)
    {
        let newName = e.target.value;
        let tempProducts = this.state.products;
        // search
        if (!newName){
            this.setState({
                searchVal: newName,
                filteredProducts:this.state.products
            })
        }
        let filtered = tempProducts.filter((item)=>{
            let searchName = (item.name === newName)
            return searchName 
        })

        this.setState({
            searchVal: newName,
            filteredProducts:filtered,
        })
    }

    inputName(e)
    {
        this.state.name = e.target.value
        console.log(this.state.name)
    }

    inputPrice(e)
    {
        this.state.price = e.target.value
    }

    addProduct(e)
    {
        let tempProducts = this.state.products;
        tempProducts.push({
            name: this.state.name,
            price: this.state.price,
            img: iphone,
        })
        this.setState({
            filteredProducts: tempProducts,
        })
    }

    render()
    {
        return <div>
            {/* search */}
            {/* Add products input */}
            {/* list of products */}
            <div className='header'>
                <MyInput onChangeFun={this.onSearchChange} value={this.state.searchVal} ph="Search Products" id="search"/>
                <form>
                    {/* <MyInput onChangeFun={this.inputName} value={this.state.name} ph="Name"/>
                    <MyInput onChangeFun={this.inputPrice} value={this.state.price} ph="Price"/> */}
                    <MyInput onChangeFun={this.inputName} ph="Name"/>
                    <MyInput onChangeFun={this.inputPrice} ph="Price"/>
                    <MyButton onClickFun={this.addProduct} caption="Add Product"/>
                </form>
            </div>
            <div className="products-container">
                {
                    this.state.filteredProducts.map((item)=>{
                        return <Product item={item}/>
                    })
                }
            </div>
        </div>
    }
}

export default ProductsPage;
