import React, { Component } from 'react'
import Style from "./Style.css"
import Product from "./Product"
import Pro from './assets/Pro.png'
import Button from './Button';
export default class Products extends Component {
    constructor(props)
    {
        super();
        this.state = {
            searchVal:"",
            productsData : [
                {
                    name:"Air Max 95 U",
                    type:"Sneakers",
                    price:"$ 99",
                    img: Pro
                },
                {
                    name:"Nike Blizzard",
                    type:"Sneakers",
                    price:"$ 99",
                    img: Pro
                },
            ],
            filteredProducts : [
                {
                    name:"Air Max 95 U",
                    type:"Sneakers",
                    price:"$ 99",
                    img: Pro
                },
                {
                    name:"Nike Blizzard",
                    type:"Sneakers",
                    price:"$ 99",
                    img: Pro
                },
            ]
        }
        this.addProduct = this.addProduct.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)
    }
    addProduct(){
        let tempProduct = this.state.filteredProducts;
        tempProduct.push(
            {
                name:"Air Max 95 U",
                type:"Sneakers",
                price:"$ 99",
                img: Pro
            }
        )
        this.setState(tempProduct)
    }
    onSearchChange(e){
        let newValue = e.target.value;
        let tempPoints = this.state.productsData;
        // Search---------
        if(!newValue){
            this.setState({
                searchVal:e.target.value,
                filteredProducts:this.state.productsData,
            })
            return
        }
        let filtered = tempPoints.filter((item)=>{
            return item.name == newValue
        })
        this.setState({
            searchVal:e.target.value,
            filteredProducts:filtered,
        })
    }
    render() {
        return (
            <div>
                <div className='Header'>
                    {/* The inputs and button */}
                    {/* Search input */}
                    <form>
                        <input placeholder='Search Product' onChange={this.onSearchChange} value={this.state.searchVal} type="text" id="search" />
                    </form>
                    {/* Add Btn */}
                    <div>
                        <Button value="Add New" handelClick={this.addProduct} />
                    </div>
                </div>





                {/* The Products */}
                <div className='flexView'>
                    {
                        this.state.filteredProducts.map((item)=>{
                            return <Product item={item} />
                        })
                    }
                </div>
            </div>
        )
    }
}
