import React from 'react';
import Input from './Input';
import Product from './Product';

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        search: '',
        price: '',
        name: '',
        products: [
            {
                name: 'Product 1',
                price: '$100',
                image: 'https://picsum.photos/200/200/?random'
            },
            {
                name: 'Product 2',
                price: '$200',
                image: 'https://picsum.photos/200/200/?random'
            },
            {
                name: 'Product 3',
                price: '$300',
                image: 'https://picsum.photos/200/200/?random'
            },
        ],
        tempProducts: [
            {
                name: 'Product 1',
                price: '$100',
                image: 'https://picsum.photos/200/200/?random'
            },
            {
                name: 'Product 2',
                price: '$200',
                image: 'https://picsum.photos/200/200/?random'
            },
            {
                name: 'Product 3',
                price: '$300',
                image: 'https://picsum.photos/200/200/?random'
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
            image: 'https://picsum.photos/200/200/?random'
        };
        tempProducts.push(newProduct);

        this.setState({
            tempProducts: tempProducts
        });

    }

  render() {
    return (
        <div className="ProductsPage">
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
                <button class="add" onClick={this.onAddProduct}>Add Product</button>
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