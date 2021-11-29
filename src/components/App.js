import React, { Component } from "react";
import image from "../img/0001.png";
import { ItemCard } from "./Product";
import { Nav } from "./Nav";
import { AddItem } from "./AddItem";
import '../index.css';
// import Search from './Search';
class App extends Component {
  state = {
    name: "",
    price: "",
    items: [
      {
        id: 1,
        name: "T shirt",
        price: "15 $",
      },
      {
        id: 2,
        name: "T shirt",
        price: "10",
      },
      {
        id: 3,
        name: "T shirt",
        price: "20",
      },
    ],
  };

  /**
   * Handle input changes in the AddItem component.
   * @param event
   */
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  /**
   * Add an item to state.
   * @param event
   */
  addItem = (event) => {
    event.preventDefault();
    const { name, price } = this.state;
    const itemsInState = this.state.items;
    const itemsArrayLength = itemsInState.length;
    const id = itemsArrayLength ? itemsInState[itemsArrayLength - 1].id + 1 : 1;
    this.setState({
      items: [
        ...itemsInState,
        Object.assign(
          {},
          {
            id,
            name,
            price,
          }
        ),
      ],
      name: "",
      price: "",
    });
  };

  render() {
    const { name, price } = this.state;
    return (
      <div>
        <Nav />
        {/* <Search details={initialDetails}/> */}
        {/* <Search /> */}
        <div className="container pt-4">
          <AddItem
            name={name}
            price={price}
            onChange={this.handleInputChange}
            onSubmit={this.addItem}
          />

          <h1 className="display-4 my-4 text-center text-muted">Items</h1>

          <div className="row">
            {this.state.items.map((item, index) => (
              <ItemCard key={item.id} index={index} image={image} item={item} />
            ))}
          </div>

          <hr />
        </div>
      </div>
    );
  }
}

export default App;
