import React, {Component} from 'react';

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            productSearch: props.productsToSearchThrough,
            products: props.productsToSearchThrough,
        }
        this.searchUpdate = this.searchUpdate.bind(this)
    }

    searchUpdate(e) {
        const { value } = e.target;
        let lastValue = value
        if (!lastValue) {
                this.setState({
                    productName: value,
                    productSearch : this.props.setStateOfParent(this.state.products)
                })
            return
        }
        let productsSearch = this.state.products
        let searchResult = productsSearch.filter((product)=>{
            return product.name == lastValue
        })
        this.setState({
            productName: value,
            productSearch : this.props.setStateOfParent(searchResult)
        });
    }


    render() {
        return (
            <input
                type="search"
                placeholder={this.props.placeholder}
                name="value"
                value={this.state.productName}
                onChange={this.searchUpdate}/>
        );
    }
}

export default SearchInput;