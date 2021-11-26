import React from "react";
import Input from "./Input";
import Product from "./Product";
import Form from "./Form";

export default class ProductsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
      filteredProducts: [],
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
    this.onSearchChange = this.onSearchChange.bind(this);
    console.log(this.state.filteredProducts);
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
  onSearchChange(event) {
    let newSearchValue = event.target.value;
    console.log(newSearchValue);
    let productsCopy = this.state.products;
    const newFilteredProducts = productsCopy.filter((productObj) => {
      return productObj.productName
        .toLowerCase()
        .startsWith(newSearchValue.toLowerCase());
    });

    this.setState({
      filteredProducts: newFilteredProducts,
      searchValue: newSearchValue,
    });
  }
  render() {
    return (
      <div>
        {/* Upper section */}
        <div>
          {/* Search div */}
          <Input
            onChangeFunction={this.onSearchChange}
            placeholder="Search Products"
            value={this.state.searchValue}
          />
          {/* Add a product div */}
          <Form onSubmitFunction={this.addProduct} />
        </div>
        <div>
          {/* Products section */}
          {this.state.filteredProducts.length == 0 &&
          this.state.searchValue == ""
            ? this.state.products.map((productObj) => {
                return (
                  <Product
                    productName={productObj.productName}
                    productPrice={productObj.productPrice}
                  />
                );
              })
            : this.state.filteredProducts.map((productObj) => {
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
