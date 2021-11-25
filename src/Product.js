import product from './assets/product.png'
import './product.css'

function Product({productsToDisplay}) {
    return (
        <div className="products-container">
            {productsToDisplay.map(({name, price, description}) => {
                return (
                    <div key={name} className="container">
                        <div className="product">
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <img src={product} alt="product picture"/>
                            <div className="p">
                                <div className="product-desc">
                                    <span>{description}</span>
                                    <h4>{name}</h4>
                                </div>
                                <span>{price}</span>
                            </div>
                        </div>
                        <button>Add to Cart</button>
                    </div>
                )
            })}
        </div>
    );
}


export default Product;