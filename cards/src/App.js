import "./App.css";
import ViewCards from "./components/View";
import Inputs from "./components/Inputs";
import React, { Component } from "react";
import Buttons from "./components/Buttons";

class App extends Component {
  constructor() {
    super();
    this.state = {
      
      name: "",
      type: "",
      price: "",
      search_value: "",
      items: [],
      items_filter: [],
    };


    this.nameChange = this.nameChange.bind(this);
    this.priceChange = this.priceChange.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }


  nameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }
  priceChange(e) {
    this.setState({
      price: e.target.value,
    });
  }
  addProduct(e) {
    let tempName = this.state.name;
    let tempPrice = this.state.price;
    if (tempName && tempPrice) {
      if (!isNaN(tempPrice)) {
        let product = new Object();
        product.name = tempName;
        product.price = tempPrice;
        product.type = "Sneakers";
        this.state.items.push(product);
        this.setState({
          items: this.state.items,
          items_filter: this.state.items,
        });
      }
    }
  }

  onSearch(e) {
    let newValue = e.target.value;
    let name = this.state.items;
    if (!newValue) {
      this.setState({
        search_value: newValue,
        items_filter: this.state.items,
      });
      return;
    }
    let filtered = name.filter((item) => {
      return item.name.includes(newValue);
    });
    this.setState({
      search_value: newValue,
      items_filter: filtered,
    });
  }
  render() {
    return (


      <div>

        
        <div>
              <Inputs
                name="search"
                ph="Search Products"
                value={this.state.search_value}
                onChange={this.onSearch}
              />
            </div>
            <div>
              {/* <div> */}
              <Inputs
                name="name"
                ph="Name"
                value={this.state.name}
                onChange={this.nameChange}
              />
              <Inputs
                name="price"
                ph="Price"
                value={this.state.product_price}
                onChange={this.priceChange}
              />
              {/* </div> */}
              {/* </div> */}
              <div>
                <Buttons onClick={this.addProduct} title="Add New"/>
              </div>
        </div>


        <div>
          {this.state.items_filter.map((item) => {
            return <ViewCards product={item} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;