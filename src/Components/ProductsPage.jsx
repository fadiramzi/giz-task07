import React, {Component} from 'react';
import Product from './Product';
import Input from './Input';
import Button from './Button';

class ProductsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: '',
      caption: '',
      price: '',
      queryParam: '',
      queryResult: [],
      products: [
      {
        'type': 'a 1',
        'caption': 'caption 1',
        'price': '$100'
      },
      {
        'type': 'b 2',
        'caption': 'caption 2',
        'price': '$200'
      },
      {
        'type': 'c 3',
        'caption': 'caption 3',
        'price': '$300'
      },
      {
        'type': 'cd 4',
        'caption': 'caption 4',
        'price': '$400'
      },
      {
        'type': 'd 5',
        'caption': 'caption 5',
        'price': '$500'
      }]
    }
    // state
    // search value
    // price value
    // name value

    //binding for any function
    this.search = this.search.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }

  addProduct(e) {
    e.preventDefault();
    const tempProducts = this.state.products;
    console.log(tempProducts);
    tempProducts.push({
      type: this.state.type,
      caption: this.state.caption,
      price: this.state.price,
    });
    this.setState({
      products: tempProducts,
      // filteredProduct: tempProducts,
    });
  }

  handleInput(e){
    if (e.target.name === "type")
      this.setState({type: e.target.value})
    else if (e.target.name === "caption")
      this.setState({caption: e.target.value})
    else if (e.target.name === "price")
      this.setState({price: e.target.value})
  }

  search(e){
    var param = e.target.value;
    if (param !== ''){
      var results = ((this.state.products).filter((product) => {return (product.type).toLowerCase().startsWith(param.toLowerCase())}));
      this.setState({
        queryResult: results
      });
    }
    else{
      this.setState({
        queryResult: this.state.products
      });
    }

    this.setState({ queryParam: param });
  }

  render() {
    return (
      <div>
        {/* Search */}
        {/* product input */}
        {/* products list */}
        <form onSubmit={this.addProduct}>
          <Input type="text" name="type" placeholder="type" onChange={this.handleInput}/>
          <Input type="text" name="caption" placeholder="caption" onChange={this.handleInput}/>
          <Input type="text" name="price" placeholder="price" onChange={this.handleInput}/>
          <Button class="submit-button" type="submit" label="Add New"/>
        </form>
        <Input name="search" type="search" value={this.state.queryParam} placeholder="search here.." onChange={this.search}/>
        <div className="products">
        { ((this.state.queryResult) && ((this.state.queryResult).length) > 0 ) ? ((this.state.queryResult).map((product, key) => (
          <Product product={product} key={key}></Product>
        )))
        : ((this.state.products).map((product, key) => (
          <Product product={product} key={key}></Product>
        )))}
        </div>
      </div>
    )
  }
}
export default ProductsPage;
