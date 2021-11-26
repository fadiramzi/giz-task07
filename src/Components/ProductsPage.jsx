import React, {Component} from 'react';
import Product from './Product';

class ProductsPage extends Component {
  constructor(props) {
    super(props)
    // state
    // search value
    // price value
    // name value

    //binding for any function
  }

  render() {
    return (
      <div>
        {/* Search */}
        {/* product input */}
        {/* products list */}
        <Product></Product>
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