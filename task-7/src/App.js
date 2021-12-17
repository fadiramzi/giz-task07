import Cart from './component/Cart';

import React from 'react'



class App extends React.Component {
  
  items = [
    {
      name : '1',
      price:'1'
    },
    {
      name : '2',
      price:'2'
    },
    {
      name : '3',
      price:'3'
    },
  ]

 state ={
   name : '',
   price:''
 }



chak =()=> {

  if(this.newname && this.newprice)
  {
    this.setState ( {
      name:this.newname,
      price:this.newprice
    })

     this.items.push(this.state)
     

  }
  
}



onserch = (serch)=>{


if(serch)
{
  this.tmp = this.items.name.filter(serch)
}

else
{
  this.tmp = this.items
}


}



  render() {
    return (
        <div>
          <div>
              <span>


              <input placeholder='serch' onChange={e=>this.onserch(e.target.value)} />


            </span>
            <span>
            <input type='text' placeholder='name' onChange={e=>this.newname = e.target.value}/>
            <input type='text' placeholder='prise'  onChange={e=>this.newprice = e.target.value} />
            <button onClick={this.chak}>Add new</button>
            </span>
            
          
          </div>

          <span>
          {this.tmp.map(index =><Cart price_cart={index.price} name_cart={index.name} /> )}
          </span>


        </div>
    );
  }
}

export default App;