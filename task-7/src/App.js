import Cart from './component/Cart';

import React from 'react'



class App extends React.Component {


  state = {
    items :[
      {
        name: 'Air Max 95 U',
        price: '1'
      },
      {
        name: 'Air Max 95 U2',
        price: '2'
      },
      {
        name: 'Air Max 95 U3',
        price: '3'
      },
      {
        name: 'Air Max 95 U3',
        price: '3'
      },
      {
        name: 'Air Max 95 U3',
        price: '3'
      },
      {
        name: 'Air Max 95 U3',
        price: '3'
      },
    ],

    serchitem:[],
   
    newname: '',
    newprice: '',
    defaultserch : true,
  }



  chak = (e) => {
    
    e.preventDefault()
    if (this.state.newname && this.state.newprice) {
      let item = {
        name : this.state.newname,
        price :this.state.newprice
      }

      let itemtemp = this.state.items

      itemtemp.push(item)

      this.setState({item:itemtemp})
      

    }

  }




  handelserch = (e) =>
  {
    e.preventDefault()
    this.setState({defaultserch:false})

    let text_input = e.target.value
    let temp

    if(this.state.defaultserch){  
      this.setState({serchitem:this.state.items,defaultserch:false})
     
    
    }
   


    if(text_input)
    {
      
      const serchitem = this.state.items.filter(index => index.name === text_input)
      this.setState({items:serchitem})

    }
    else{
   
      this.setState({items:this.state.serchitem})
    }
   
    
  }





 


  render() {

     


    return (
      <div>
        <div id='contener-serch'>
          <span>
            <input placeholder='serch' onChange={this.handelserch} />
          </span>
          <span>
            <form onSubmit={this.chak}>
              <input type='text' placeholder='name' onChange={e => this.setState({newname :e.target.value})} />
              <input type='text' placeholder='prise' onChange={e => this.setState({newprice :e.target.value})} />
              <button >Add new</button>
            </form>
          </span>


        </div>

        <div id='continer-cart'>
          {
            this.state.items.map((index) =>{return <Cart name_cart={index.name} price_cart={index.price}/>})
          
           
          
          }
        </div>


      </div>
    );
  }
}

export default App;