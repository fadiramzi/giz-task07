import React from 'react'; 
import { Component } from 'react';
import Buttons from './Buttons';
import Inputs from './Inputs';
import Product from './Product'
class Products extends Component{
    constructor(props)
    {
        super(props);
        this.state =    
        {
            products:[
                {type: "sneakers", description: "j", price:"91119$"},
                {type: "sneaks", description: "whatddever",price:"95559$"},
                {type: "snrs", description: "m",price:"9339$"},
                {type: "kj", description: "whatever",price:"9922$"},
                {type: "sneaks", description: "whatddever",price:"95559$"},
                {type: "snrs", description: "m",price:"9339$"},
                {type: "kj", description: "whatever",price:"9922$"},
            ],
            filteredPoints:[
                {type:'',description:'',price:''}
            ]
        }
        this.onSearchChange = this.onSearchChange.bind(this)

    }
    onSearchChange=(e)=>
    {
        console.log(e.target.value)
        let newValue = e.target.value;
        let tempPoints = this.state.products;
        // search
        if(!newValue)
        {
            this.setState({
                searchVal:newValue,
                filteredPoints:this.state.products
            })
            return
        }
       let filtered = tempPoints.filter((item)=>{
           return (item.type == newValue,item.description==newValue, item.price==newValue
       )})
        this.setState({
            searchVal:newValue,
            filteredPoints:filtered
        })
    
    }
    onAddProduct=()=>
    {
        alert("added")
    }
    
    render()
    {
        return(
            <div >
                <div>
                <Inputs onChangee={this.onSearchChange} className="srch" type="text"  placeholder ="Search A Product"   />
                <Inputs className="namepriceheader"  placeholder ="name"  />
                <Inputs className="namepriceheader" placeholder ="price"  />        
                 <Buttons className="addnew" onChabge={this.onAddProduct}  caption="Add New"/>
                 </div>
                 <div className="cartsDiv">
                 {
                 this.state.products.map(item => 
                    (
                    <Product type={item.type} description={item.description} price={item.price}   />
                    )   
                                        )
                 }

                 </div>
            
        </div>
        
           
        )
    }
}

export default Products