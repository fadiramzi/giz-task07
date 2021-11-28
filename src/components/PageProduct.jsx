import React from "react";
import Product from "./Product";
import Input from "./Input";
// import Button from "./Button";

class PageProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      // filteredProduct: [
      //   {
      //     name: "a1",
      //     description: "a2",
      //     prics: "a2",
      //   },
      //   {
      //     name: "b1",
      //     description: "b2",
      //     prics: "b2",
      //   },
      //   {
      //     name: "c1",
      //     description: "c2",
      //     prics: "c2",
      //   },
      // ],

      products: [
        {
          name: "a1",
          description: "a2",
          prics: "a2",
        },
        {
          name: "b1",
          description: "b2",
          prics: "b2",
        },
        {
          name: "c1",
          description: "c2",
          prics: "c2",
        },
      ],
    };
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct() {
    const tempProducts = this.state.products;
    console.log(tempProducts);
    tempProducts.push({
      name: "nnnnn",
      description: "mmmm",
      prics: "oooo",
    });
    this.setState({
      products: tempProducts,
      // filteredProduct: tempProducts,
    });
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <Input
                type="text"
                name="Search Products"
                placeholder="Search Products"
                value={this.state.value}
                onChange={this.handleChange}
              />
              {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
            </label>
            {/* this submit must be ENTER not Submit button */}
            {/* <input type="submit" value="Submit" /> */}
          </form>
        </div>

        <div>
          <Input name="Name" placeholder="Name" />
          <Input name="Price" placeholder="Price" />
          <button onClick={this.addProduct}>Add New Product</button>
        </div>

        {/* {this.state.filteredProduct.map((product) => (
          <Product product={product}></Product>
        ))} */}

        {this.state.products.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    );
  }
}

export default PageProduct;
