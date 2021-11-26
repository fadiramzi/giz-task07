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
        <div className="nav-bar">
          <div className="input-bar">
            <div className="input-left-bar">
              <Inputs
                name="search"
                ph="Search Products"
                value={this.state.search_value}
                onChange={this.onSearchChange}
                ClassName="single-input-left"
              />
            </div>
            <div className="input-right-bar">
              {/* <div className="input-right-bar-adjustment"> */}
              <Inputs
                name="product_title"
                ph="Name"
                value={this.state.product_name}
                onChange={this.ProductChange}
                ClassName="single-input-right"
              />
              <Inputs
                name="product_price"
                ph="Price"
                value={this.state.product_price}
                onChange={this.PriceChange}
                ClassName="single-input-right"
              />
              {/* </div> */}
              {/* </div> */}
              <div className="position-product-parent">
                <Buttons onClick={this.AddProduct} title="Add New" ClassName="add-btn" />
              </div>
            </div>
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
