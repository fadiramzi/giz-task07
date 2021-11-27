
import React, { Component } from 'react';
import { ProductCard } from '../components/ProductCard';




export class ProductList extends Component {
    constructor(){
       super();
       this.state={
         
           search:'',
           Name:'',
           Price:'',
           filteredProduct:[
            {name:"potaddas",price:22},
            {name:"teshart",price:22},
            {name:"teshret addes",price:22},
     
          
          ],
            
        products:[
          {name:"potaddas",price:22},
          {name:"teshart",price:22},
          {name:"teshret addes",price:22},
          
          ],

       }
       this.addNew=this.addNew.bind(this)
       this.changName=this.changName.bind(this)
       this.changPrice=this.changPrice.bind(this)
       this.serch=this.serch.bind(this)      
    }
    changName(e){
        this.setState({Name:e.target.value})

           
    }
    changPrice(e){
        this.setState({Price:e.target.value})
    }
    addNew(){
       const areyPrudct=this.State.products;
        areyPrudct.push({
            name:this.state.Name,
            price:this.state.Price
        })
        this.setState({
            products:areyPrudct,
            filteredProduct:areyPrudct
        })
           
    }
    serch(){
           
    }
    
    

  render() {
    return (
      <div>
         <div >
            <input type="text" name="Name" id="" />

        <div>
            <input onChange={this.changName} type="text" name="" id="" />
            <input onChange={this.changPrice} type="text" name="" id="" />
            <button on onClick={this.addNew}>Add New Product</button>
        </div>
        <div>
            <h1>pruduct</h1>
            {  this.state.filteredProduct.map((products) =>(
               <ProductCard>{products}</ProductCard> 
                ))
            }
        </div>

        
        </div>

     </div>

    )
  }
}