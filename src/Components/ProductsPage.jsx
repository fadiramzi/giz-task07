import React, {Component} from 'react';
import Product from './Product';
// import Input from './Input';

class ProductsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
    // this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }



  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event){
  //   console.log(this.state.value);
  // }

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

    this.setState({ queryParam: param});
  }

  render() {
    return (
      <div>
        {/* Search */}
        {/* product input */}
        {/* products list */}

        <input type="search" value={this.state.queryParam} onChange={this.search}/>
        <div className="products">
        { ((this.state.queryResult) && ((this.state.queryResult).length) > 0 ) ? ((this.state.queryResult).map((product) => (
          <Product product={product}></Product>
        )))
        : (<p>Product not found</p>)}
        </div>
      </div>
    )
  }
}
export default ProductsPage;
//stateless
// import React from 'react';

// function ProductsPage(props) {
//   return (
//     <div>

//     </div>
//   );
// }

// export default ProductsPage;