import React, { Component } from 'react';
import Button from "./Button";
import mouse from './DeathAdder2000.jpg'
import keyboard from './GamekayMK61.jpeg'

class Productspage extends Component {
    constructor(){
        super();
        this.state={
            searchVal:'',
            productNameVal:'',
            productPriceVal:'',
             filteredProdcuts:[
                {
                    productName:'DeathAdder 2000',
                    productDesc:'Mouse',
                    productPrice:'$35',
                    productImg:mouse
                },
                {
                    productName:'Gamekay MK61',
                    productDesc:'Keyboard',
                    productPrice:'$45',
                    productImg:keyboard
                },
            ],
             products:[
                {
                    productName:'DeathAdder 2000',
                    productDesc:'Mouse',
                    productPrice:'$35',
                    productImg:mouse
                },
                {
                    productName:'Gamekay MK61',
                    productDesc:'Keyboard',
                    productPrice:'$45',
                    productImg:keyboard
                },
            ]
        }
        this.Srch = this.Srch.bind(this)
        this.addName = this.addName.bind(this)
        this.addPrice = this.addPrice.bind(this)
        this.add = this.add.bind(this)
        this.Products = this.Products.bind(this)
    }
     Products() {
        return (
            <div>
                {
                    this.state.filteredProdcuts.map((product)=>(
                        <div className={'pr'}>
                            <img src={product.productImg} alt="" />
                         <p className={'des'}>
                            {product.productDesc}
                         </p>
                            <h3 className={'pro-nam'}>
                            {product.productName}
                            </h3>
                            <p className={'price'}>
                            {product.productPrice}
                            </p>
                            <button className={'cart-btn'}>Add to Cart</button>
                        </div>
                    ))
                }
            </div>
        )
    }
    
    Srch(e){
        console.log(e.target.value);
        let newValue = e.target.value;
        let tempPr = this.state.products;
        if(!newValue)
        {
            this.setState({
             searchVal:newValue,
             filteredProdcuts:this.state.products
            })
            return
        }
        let filtered = tempPr.filter ((item)=>{
            return item.productName == newValue
        })

     this.setState({
         searchVal:newValue,
         filteredProdcuts:filtered
     })
 }

addName(e){
    console.log(e.target.value)
    let inval = e.target.value

        this.setState({
            productNameVal: inval
        })
    
}
addPrice(e){
    console.log(e.target.value)
    let inval2 = e.target.value
        this.setState({
            productPriceVal: inval2
        })
    }
    
    add(e){
        e.preventDefault();
    let tempPr= this.state.products
    if(this.state.productNameVal != '' && this.state.productPriceVal != ''){
        tempPr.push({
           productName:this.state.productNameVal,
           productPrice:'$' + this.state.productPriceVal,
           productDesc:"Electronics",
           productImg:mouse
       })
           this.setState({
               filteredProdcuts:tempPr
           })
    }
}
    render() {
        return (
            <div className={'main'}>
                <form className={'form'}>
                    <div>
                <input className={'srch-inp'} onChange={this.Srch}  value={this.state.searchVal} type="text" placeholder={'Search Products'} id="search" />
                    </div>
                <div className={'right-form'} >
                    <div>
                <input className={'srch-inp'} onChange={this.addName}  value={this.state.productNameVal} type="text" placeholder={'Name'} id="name" />

                    </div>
                    <div>
                <input className={'srch-inp'} onChange={this.addPrice}  value={this.state.productPriceVal} min={0} type="number" placeholder={'Price'} id="price" />

                    </div>
                    <div>
                <Button className={'btn'} bgColor="green" clickFun={this.add} txtColor="white" caption="Add New" />

                    </div>
</div>
               </form>
                <div className={'products'}>
                <this.Products />
                </div>
            </div>
        );
    }
}

export default Productspage;
