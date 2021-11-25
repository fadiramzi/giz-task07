import React from 'react'
import Card from './components/Card'

class Products extends React.Component{
    constructor(props)
    {
        super();
        this.state = {
            searchQ:'',
            pName:'',
            pPrice:'',
            filteredProduct:[
                  {name:"Wacht-v1",price:220},
                  {name:"Wacht-v1",price:220},
                  {name:"Wacht-v1",price:220},
           
                
                ],
                  
            products:[
                {name:"Wacht-v1",price:220},
                {name:"Wacht-v1",price:220},
                {name:"Wacht-v1",price:220},
                
                ]
        }
        this.addProduct = this.addProduct.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handlePrice = this.handlePrice.bind(this)


        this.search = this.search.bind(this)

    }

    handleName (e)  {
    this.setState({pName:e.target.value})
      }
    handlePrice (e)  {
    this.setState({pPrice:e.target.value})


     }
    addProduct()
    {
        let currProducts = this.state.products;
        currProducts.push({
            name:this.state.pName,
            price:this.state.pPrice
        })
            this.setState({
                products:currProducts,
                filteredProduct:currProducts
            })

    }
    search(e)
    {
        let newValue = e.target.value;
        let currProducts = this.state.products;
        if(!newValue)
        {
            this.setState({
                searchQ:newValue,
                filteredProduct:this.state.products
            })
            return
        }
       let filtered = currProducts.filter((item)=>{
           return item.name == newValue
        })
        this.setState({
            searchQ:newValue,
            filteredProduct:filtered,
       
        })
    }
    render()
    {
    return <div>
    <div style={{display:"flex",justifyContent:'space-around' ,padding:'10px'}}>
       <input onChange={this.search} value={this.state.searchQ} type="text" placeholder='Sreach For  Products' ></input>
     
       <div style={{display:"flex",justifyContent:'center' ,padding:'10px'}}>
         <input   type='text' onChange={this.handleName}></input>
         <input type='number' onChange={this.handlePrice}></input>
         <button onClick={this.addProduct} >Add New Product</button>
       </div> 

    </div>
    <div style={{display:'flex',flexWrap:'wrap',margin:'10px' ,padding:'20px',justifyContent:'space-between',width:"1200px",height:'1200px',margin:'10px',marginLeft:'100px'}} >
     {  this.state.filteredProduct.map((product) =>(
      <Card product={product}></Card>
     ))
}
    </div>
    </div>

        
    }
}

export default Products


  