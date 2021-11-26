import React from "react";
import Input from "./Input";
import Button from "./Button";
import Product from "./Product";

export default class ProductsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          productName: "Air Max 95 U",
          productPrice: "99",
        },
        {
          productName: "Air Max 95 V",
          productPrice: "95",
        },
      ],
    };
    this.addProduct = this.addProduct.bind(this);
  }
  addProduct(event) {
    // To stop default behaviour of reloading the page
    event.preventDefault();
    // Make a copy of the products
    let productsCopy = this.state.products;
    const newProductName = event.target.productName.value;
    const newProductPrice = event.target.productPrice.value;
    const newProduct = {
      productName: newProductName,
      productPrice: newProductPrice,
    };
    // Add the item at the beginning of the array
    productsCopy.unshift(newProduct);
    console.log(productsCopy);
    this.setState({
      products: productsCopy,
    });
  }
  render() {
    return (
      <div>
        {/* Upper section */}
        <div>
          {/* Search div */}
          <Input placeholder="Search Products" />
          {/* Add a product div */}
          <form onSubmit={this.addProduct}>
            <Input name="productName" placeholder="Name" />
            <Input name="productPrice" placeholder="Price" />
            <Button text="Add New" />
          </form>
        </div>
        <div>
          {/* Products section */}
          {this.state.products.map((productObj) => {
            return (
              <Product
                productName={productObj.productName}
                productPrice={productObj.productPrice}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
