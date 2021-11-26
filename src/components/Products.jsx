import React, { Component } from 'react'
import Style from "./Style.css"
import Product from "./Product"
import NameInput from './NameInput'
import PriceInput from './PriceInput'
import Pro from './assets/Pro.png'
import Button from './Button';
export default class Products extends Component {
    constructor(props)
    {
        super();
        this.state = {
            productName:"",
            productPrice:"",
            searchVal:"",
            items:[],
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
        this.onSearchChange = this.onSearchChange.bind(this)
        this.NameChange = this.NameChange.bind(this)
        this.PriceChange=this.PriceChange.bind(this)
        this.AddProduct=this.AddProduct.bind(this)
    }
    NameChange(e){
        this.setState({
            productName:e.target.value
        });
    }
    PriceChange(e){
        this.setState({
            productPrice:e.target.value
        });
    }
    AddProduct(e){
        let nameValue = this.state.productName;
        let priceValue = this.state.productPrice;
        if (nameValue && priceValue){
            if (!isNaN(priceValue)){
                let newProduct = new Object();
                newProduct.img = Pro;
                newProduct.name = nameValue;
                newProduct.price = priceValue;
                newProduct.type = "Sneakers";
                this.state.items.push(newProduct);

                this.setState({
                    items:this.state.items ,
                    filteredProducts:this.state.items,
                })
            }
        }
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
                        <NameInput placeholder="Name" type="text" value={this.state.productName} onChange={this.NameChange} />
                        <PriceInput placeholder='Price' type="text" value={this.state.productPrice} onChange={this.PriceChange} />
                        <Button value="Add New" handelClick={this.AddProduct} />
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
