import React from "react";
import iphone from "./image/iphone.jpg"
import iphone12 from "./image/iphone12.jpg"
import iphone8plus from "./image/iphone8plus.jpg"
import iphone15 from "./image/iphone15.jpg"
import Button from './Button';
import './home.css'

class Home extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            data:'',
            name:props.nameVal,
            price: props.priceVal,

            searchVal:'',
            filteredcard:[{
                name:"iphone13",
                price:"$1400",
                description:"phone",
                image: iphone,
            },
            {
                name:"iphone12",
                price:"$1000",
                description:"phone",
                image: iphone12,
            },
            {
                name:"iphone 8 pluse",
                price:"$700",
                description:"phone",
                image:iphone8plus,
            }],
            cart:[
                {
                    name:"iphone13",
                    price:"$1400",
                    description:"phone",
                    image: iphone,
                },
                {
                    name:"iphone12",
                    price:"$1000",
                    description:"phone",
                    image: iphone12,
                },
                {
                    name:"iphone 8 pluse",
                    price:"$700",
                    description:"phone",
                    image:iphone8plus,
                }
            ]
        }
        this.addnew = this.addnew.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)
        this.inputName = this.inputName.bind(this);
        this.inputPrice= this.inputPrice.bind(this);
    }

    // add new products
    
    addnew(e)
    {
        let tempcart = this.state.filteredcard;
        tempcart.push({
            name:"iphone15",
            price:"$2500",
            description:"phone",
            image:iphone15,
        })
            this.setState({
                cart:tempcart
            })
    }
    onSearchChange(e)
    {
       let newValue = e.target.value;
       let tempcart = this.state.cart;
       if(!newValue)
       {
        this.setState({
            searchVal:e.target.value,
            filteredcard:this.state.cart
        })
        return
       }
       let filtered = tempcart.filter((item)=>{
           return item.name == newValue

       })
       this.setState({
           searchVal:e.target.Value,
           filteredcart:filtered
       })
    }

    // {/* input name */}

    inputName(e) {
        const { value } = e.target;
        let lastVal = value
        this.setState({
            data: value,
            name: this.props.setStateOfInput(lastVal)
        });
    }

    // {/* input Price */}

    inputPrice(e) {
        const { value } = e.target;
        let lastVal = value
        this.setState({
            data: value,
            price: this.props.setStateOfInput(lastVal),
        });
    }
    render()
    {
        return <div>

             {/* input Price*/}
            <div className='inputt'>
            <input type="text" placeholder="Price" name="data"value={this.state.data} onInput={this.inputPrice}/>
            </div>

            {/* input name */}
            <div className='inputt'>
             <input type="text" placeholder='Name' name="data" value={this.state.data} onInput={this.inputName}/>
             </div>
               {/* input search */}
         <div className='inputt'>
               <form>
                        <input placeholder='Search Product' onChange={this.onSearchChange} value={this.state.searchVal} type="text" id="search" />
                    </form>

               {/* but Add new */}
            <div>
            <Button value="Add New" handelClick={this.addnew} />
            </div>
            </div>


               {/* cart */}
            <div>
                {
                    this.state.filteredcard.map((item)=>{
                        return <div className="Card">
                        <img className="img" src={item.image} alt="" />   
                        <div>
                        <div className="item">
                          <div className="p" >
                            <h6>{ item.description }</h6>
                            <h1>{ item.name }</h1>
                          </div>
                          <div>
                            <h2>{ item.price }</h2>
                          </div>
                        </div>
                        <button className="Btn">Add To cart</button>
                        </div>
                      </div>
                    })
                }
            </div>
        </div>


    };
};


export default Home;
