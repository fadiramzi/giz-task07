import React from 'react'
import Product from './card';
class Products extends React.Component{
    
    constructor(props)
    {
        super();
        this.state = {
        productName:'',
        productPrice:'',
        searchVal:'',
        filteredProducts:[
            {name:"Air Max 95 U",price:"99"}
        ],
        products:[
            {name:"Air Max 95 U",price:"99"}
        ]
        }
        this.addProduct = this.addProduct.bind(this)
        this.search = this.search.bind(this)
        this.Name = this.Name.bind(this)
        this.Price = this.Price.bind(this)
    }
    Name(e){
        this.setState({
        name:e.target.value
        })
    }
    Price(e){
        this.setState({
        price:e.target.value
        })
    }
    addProduct() 
{
        let products= this.state.products
        products.push({
        name:this.state.name,
        price:this.state.price,
        })
        this.setState({
        products:products,
        })
    }

    search(e)
    {
        let newValue = e.target.value;
        let searchProduct = this.state.products;
        if(!newValue){
            this.setState({
                searchVal:newValue,
                filteredProduct:this.state.products
            })
            return
        }
    let filtered = searchProduct.filter((item)=>{
        return item.name === newValue
        })
        this.setState({
        searchVal:newValue,
        filteredProducts:filtered,
        })
    }

    render()
    {
        return (<div className="container">
        <div className="addContainer">
        <input className="nameAddProduct" type="text" onChange={this.Name} placeholder="Name"></input>
        <input className="priceAddProduct" type="number" onChange={this.Price} placeholder="Price"></input>
        <button onClick={this.addProduct} >Add New</button>
        </div>
        <div className="card">{this.state.filteredProducts.map((product) =>{
            return <Product product={product}></Product>
        })}
        </div>
        </div>)
    }
    
}

export default Products