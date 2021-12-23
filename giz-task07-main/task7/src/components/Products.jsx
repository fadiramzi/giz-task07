import React from "react";

class ViewProduct extends React.Component{
    constructor(){
        super()
        this.state = {
            products: [
                {
                    productname: 'adidas',
                    productprice: '330'
                },
            ]
        }


        this.addpruduct = this.addpruduct.bind(this)
        
        
    }

    addpruduct(event){

        let newproducts = this.state.products;
        if (document.getElementById("Pname").value != '' & document.getElementById("Pprice").value != '') {
            
            newproducts.push({
                productname: document.getElementById("Pname").value,
                productprice: document.getElementById("Pprice").value
            })
    
            this.setState({
                products: newproducts
            })

            document.getElementById("Pname").value = ''
            document.getElementById("Pprice").value = ''
        
        }else{
            alert("enter values")
        }
    }
    
    render(){
        return <div>
        
            <div class="container">
                
                <div class="search">
                    <form>
                        <input type="text" class="search-inp" placeholder="Search Product" />
                    </form>
                </div>
                
                {/* <div>
                    {this.state.products.map((item)=>{
                        return <tr>
                            <td>{item.productname}</td>
                            <td>{item.productprice}</td>
                        </tr>
                    })}
                </div> */}


                <div>
                    <form>
                    
                        <input type="text" id="Pname" class="Pname" placeholder="Name" />
                        <input type="number" id="Pprice" class="Pprice" placeholder="Price" />
                
                    </form>
                </div>
                
                <div>
                    <button onClick={this.addpruduct} class="add-btn">Add New</button>
                </div>
            </div>

            <div class="products">
                    {this.state.products.map((item)=>{
                        return <div class="item">
                                    <div class="img">
                                        
                                    </div>
                                    <div class="disc">
                                        <div>
                                            <p>sneakers</p>
                                            <h3 class="dis-name">{item.productname}</h3>
                                        </div>
                                        <div class="price">
                                            <h3>{item.productprice}$</h3>
                                        </div>
                                    </div>
                                </div>
                    })}
            </div>
        </div>
    }
}


export default ViewProduct