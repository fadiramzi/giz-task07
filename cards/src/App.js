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
      products: [],
      products_filter: [],
    };


    this.nameChange = this.nameChange.bind(this);
    this.priceChange = this.priceChange.bind(this);
    this.typeChange = this.typeChange.bind(this);
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

  typeChange(e) {
    this.setState({
      type: e.target.value,
    });
  }
  addProduct(e) {
    
    let tempName = this.state.name;
    let tempPrice = this.state.price;
    let tempType = this.state.type;
    let tempProducts = tempName + tempPrice + tempType;
    
    if (tempProducts) {
      let product = [];
      product.name = tempName;
      product.price = tempPrice;
      product.type = tempType;
      this.state.products.push(product);
      this.setState({
        product: this.state.products,
        products_filter: this.state.products,
      });
    }
  }

  onSearch(e) {
    let newSearch = e.target.value;
    let name = this.state.products;
    if (newSearch===false) {
      this.setState({
        search_value: newSearch,
        products_filter: this.state.products,
      });
      return;
    }
    let filtered = name.filter((item) => {
      return item.name.includes(newSearch);
    });
    this.setState({
      search_value: newSearch,
      products_filter: filtered,
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
                value={this.state.price}
                onChange={this.priceChange}
              />

              <Inputs
                name="type"
                ph="type"
                value={this.state.type}
                onChange={this.typeChange}
              />
              {/* </div> */}
              {/* </div> */}
              <div>
                <Buttons onClick={this.addProduct} title="Add New"/>
              </div>
        </div>


        <div>
          {this.state.products_filter.map((item) => {
            return <ViewCards product={item} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;