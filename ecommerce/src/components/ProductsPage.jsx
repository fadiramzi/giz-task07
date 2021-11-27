import React from 'react';
import Input from './Input';
import Product from './Product';
import Button from './Button';
import product from '../assets/product.png';

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        search: '',
        price: '',
        name: '',
        products: [
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
        ],
        tempProducts: [
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
            {
                name: 'Air Max 96 U',
                price: '$99',
                image: product
            },
        ],
    }


    //bindings and event handlers
    this.onSearch = this.onSearch.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onAddProduct = this.onAddProduct.bind(this);
  }

  onSearch(e){
        let search = e.target.value;
        let tempProducts = this.state.products;

        if(search.length > 0){

            let filteredProducts = tempProducts.filter(product => {
                return product.name.toLowerCase().includes(search.toLowerCase());
            });

            this.setState({
                search: search,
                tempProducts: filteredProducts
            });

        } else {
            this.setState({
                search: search,
                tempProducts: this.state.products
            });
        }
    }

    onNameChange(e){
        this.setState({
            name: e.target.value
        });
    }

    onPriceChange(e){
        this.setState({
            price: e.target.value
        });
    }

    onAddProduct(){
        //add a product
        //set the state
        let tempProducts = this.state.products;
        let newProduct = {
            name: this.state.name,
            price: this.state.price,
            image: product
        };
        tempProducts.push(newProduct);

        this.setState({
            tempProducts: tempProducts
        });

    }

  render() {
    return (
        <div className="products-page">
            <div className="header">
                <div className="search">
                    <Input
                        placeholder="Search"
                        value={this.state.search}
                        onChange={this.onSearch}
                    />
                </div>

                <div className="add-product">
                    <Input
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <Input
                        placeholder="Price"
                        value={this.state.price}
                        onChange={this.onPriceChange}
                    />
                    <Button class="add" onClick={this.onAddProduct} text="Add Product" />
                </div>
            </div>
            <div className="products">
                {this.state.tempProducts.map(product => (
                    <Product
                        image={product.image}
                        title={product.name}
                        price={product.price}
                    />
                ))}

            </div>
        </div>
    );
  }
}
export default ProductsPage;