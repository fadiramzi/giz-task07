import React  from 'react'
import AddButton from '../Button/Add-Button'
import Inputs from '../Inputs/Inputs'
import ProductCard from '../Product-Card/ProductCard'
import './StyleProductsPage.css'

// stateful component
class ProductsPage extends React.Component {
    constructor()
    {
        super();
        this.state = 
        {
            searchVal: '',
            name: '',
            price: '',
            productsList: 
            [
                {
                    name: 'Air Max 95 U',
                    price: '90$'
                },
                {
                    name: 'NIKE',
                    price: '70$'
                },
                {
                    name: ' adidas shoe',
                    price: '50$'
                },
            ],
            filteredProductsList: 
            [
                {
                    name: 'Air Max 95 U',
                    price: '90$'
                },
                {
                    name: 'NIKE',
                    price: '70$'
                },
                {
                    name: ' adidas shoe',
                    price: '50$'
                },
            ]
        }
        this.addProduct = this.addNewProduct.bind(this)
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangePrice = this.onChangePrice.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)
    }

    addNewProduct(e) 
    {
        let newProductsList = this.state.productsList;
        
        newProductsList.push({
            name: this.state.name,
            price: this.state.price
        })
        this.setState({
            productsList: newProductsList,
            filteredProductsList: newProductsList
        })
    }

    onChangeName(e)
    {
        this.state.name = e.target.value
    }

    onChangePrice(e)
    {
        this.state.price = e.target.value
    }

    onSearchChange(e)
    {
        let newValue= e.target.value
        let tembProductsList = this.state.productsList

        if(!newValue)
        {
            this.setState({
                searchVal:newValue,
                filteredProductsList: this.state.productsList
            })
            return
        }

        let filterdProducts = tembProductsList.filter((product) => {
            let searchName = (product.name === newValue)
            let searchPrice = (product.price === newValue)
            if(searchName)
            {
                return searchName
            }
            else if(searchPrice)
            {
                return searchPrice
            }
        })
        this.setState({
            searchVal: newValue,
            filteredProductsList: filterdProducts
        })
    }
    render() {
        return (
            <div className="page-style">
                <div className="header-style">
                    <Inputs ph="Search Products" onChangeFun={this.onSearchChange} value={this.state.searchVal} />
                    <div className="create-prod">
                        <Inputs ph="Name" onChangeFun={this.onChangeName} />
                        <Inputs ph="Price $" onChangeFun={this.onChangePrice} />
                        <AddButton caption="Add New" onClickFun={this.addNewProduct} />
                    </div>
                </div>
                <div className="products">
                    {
                        this.state.filteredProductsList.map((product) => {
                            return <ProductCard product={product} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ProductsPage;
