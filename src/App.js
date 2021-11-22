import React from 'react';
import Alert from './components/Alert';
import Input from './components/Input';
import Button from './components/Button';
import Product from './components/Product';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      'alert': false,
      'msg': {},
      'searchValue': "",
      'productName': "",
      'productPrice': "",
      'products': [],
      'filterdProducts': []
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.validate = this.validate.bind(this)
  }

  onSearchChange(e) {
    let Products = Array.from(this.state.products);
    let value = e.target.value

    if(!value) {
      this.setState({'searchValue': value,'filterdProducts': Products})
      return
    }

    let filteredProducts = Products.filter((product)=>{return product.name.includes(value)})
    this.setState({'searchValue': value,'filterdProducts': filteredProducts})
  }

  onNameChange(e) {
    this.setState({'productName': e.target.value})
  }

  onPriceChange(e) {
    this.setState({'productPrice': e.target.value})
  }

  validate() {
    let Msg = Object.create(this.state.msg)
    if(!this.state.productName) {
      Msg.name = "Name can not be Empty"
    }
    else if(!this.state.productName.match(/^[a-zA-Z0-9@\. ]+$/)) { 
      Msg.name = 'Name Must be string'
    } 
    else {
      delete Msg.name
    }
    if(!this.state.productPrice) {
      Msg.price = "Price can not be Empty"
    }
    else if(!this.state.productPrice.match(/^[0-9]+$/)) {
      Msg.price = 'Price Must be integer'
    }
    else {
      delete Msg.price
    }

   this.setState({'msg':Msg})
   return Object.keys(Msg).length === 0
  }


  onAdd(e) {
    if(!this.validate()) {
      this.setState({'alert':true})
      return
    }
    
    let Products = Array.from(this.state.products)
    let Product = new Object()
    Product.name = this.state.productName
    Product.price = this.state.productPrice
    Products.push(Product)
    this.setState({'products': Products, 'filterdProducts':Products, 'alert':false, 'productName':"", 'productPrice':""})
  }


  render() { 
    return (
          <div className="App">
            <div className="header">
            <Input type="text" placeholder="Search Products" class="search-input" value={this.state.searchValue} handelChange={this.onSearchChange} />
              <div>
                <Input type="text" placeholder="Name" class="input" value={this.state.productName} handelChange={this.onNameChange} />
                <Input type="text" placeholder="Price" class="input" value={this.state.productPrice} handelChange={this.onPriceChange} />
                <Button class="btn" value="Add New" handelClick={this.onAdd} />
              </div>
            </div>
            {this.state.alert && <Alert msg={Object.values(this.state.msg)} />}
            <div className="body">
              <Product products={this.state.filterdProducts} />
            </div>
          </div>
      );
  }
}
 

export default App;