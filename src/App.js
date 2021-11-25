import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";
import Inputs from "./components/Inputs";
import React, { Component } from "react";
import Buttons from "./components/Buttons";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      product_name: "",
      product_price: "",
      search_value: "",
      items: [],
      items_filter: [],
    };
    this.ProductChange = this.ProductChange.bind(this);
    this.PriceChange = this.PriceChange.bind(this);
    this.AddProduct = this.AddProduct.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }
  ProductChange(e) {
    this.setState({
      product_name: e.target.value,
    });
  }
  PriceChange(e) {
    this.setState({
      product_price: e.target.value,
    });
  }
  AddProduct(e) {
    let product_val = this.state.product_name;
    let price_val = this.state.product_price;
    if (product_val && price_val) {
      if (!isNaN(price_val)) {
        let productObj = new Object();
        productObj.title = product_val;
        productObj.price = price_val;
        productObj.type = "shoes";
        this.state.items.push(productObj);
        this.setState({
          items: this.state.items,
          items_filter: this.state.items,
        });
      }
    }
  }

  onSearchChange(e) {
    let newValue = e.target.value;
    let name = this.state.items;
    // search
    if (!newValue) {
      this.setState({
        search_value: newValue,
        items_filter: this.state.items,
      });
      return;
    }
    let filtered = name.filter((item) => {
      return item.title.includes(newValue);
    });
    this.setState({
      search_value: newValue,
      items_filter: filtered,
    });
  }
  render() {
    return (
      <div>
        <div className="input-bar">
          <div>
            <Inputs
              name="search"
              ph="Search Products"
              value={this.state.search_value}
              onChange={this.onSearchChange}
              ClassName="single-input"
            />
          </div>
          <div className="input-right-bar">
            <Inputs
              name="product_title"
              ph="product_title"
              value={this.state.product_name}
              onChange={this.ProductChange}
              ClassName="single-input"
            />
            <Inputs name="product_price" ph="price" value={this.state.product_price} onChange={this.PriceChange} />
            <Buttons onClick={this.AddProduct} title="Add New" ClassName="someclass" />
          </div>
        </div>
        <div className="product-parent">
          {this.state.items_filter.map((item) => {
            return <Product product={item} />;
          })}
        </div>
      </div>
    );
  }
}
