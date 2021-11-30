import React from "react";
import Product from "./Product";
import Input from "./Input";
import Button from "./Button";

class PageProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      searchResult: "",
      products: [
        {
          name: "1 Sneakers",
          description: "Air Max 95 U",
          prics: "$ 99",
        },
        {
          name: "2 Sneakers",
          description: "Air Max 95 U",
          prics: "$ 99",
        },
        {
          name: "3 Sneakers",
          description: "Air Max 95 U",
          prics: "$ 99",
        },
      ],
    };
    this.addProduct = this.addProduct.bind(this);
    this.searchFun = this.searchFun.bind(this);
  }

  addProduct() {
    const tempProducts = this.state.products;
    //console.log(tempProducts);
    tempProducts.push({
      name: "++ Sneakers",
      description: "Air Max 95 U",
      prics: "$ 99",
    });
    this.setState({
      products: tempProducts,
    });
  }

  searchFun = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = this.state.products.filter((product) => {
        return product.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      this.setState({
        searchResult: results,
      });
    } else {
      this.setState({
        searchResult: this.state.products,
      });
    }
    this.setState({
      searchValue: keyword,
    });
  };

  render() {
    return (
      <div className="product-page">
        <div className="nav-bar">
          <div className="search-section">
            <Input
              className="input-search"
              name="Search Products"
              placeholder="Search Products"
              value={this.state.searchValue}
              onChange={this.searchFun}
            />
          </div>
          <div className="addProduct-section">
            <Input className="input-addProduct" placeholder="Name" />
            <Input className="input-addProduct" placeholder="Price" />
            <Button className="btn-addProduct" onClick={this.addProduct} title="Add new product" />
          </div>
        </div>

        <div className="products-area">
          {this.state.searchResult && this.state.searchResult.length > 0
            ? this.state.searchResult.map((product) => (
                <Product product={product}></Product>
              ))
            : this.state.products.map((product) => (
                <Product product={product}></Product>
              ))}
        </div>
      </div>
    );
  }
}

export default PageProduct;
