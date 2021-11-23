import {FaTimes} from 'react-icons/fa'

const Product = ({product, onDelete}) => {
    return (
        <div className={'product'}>
            
                <div className={'deletex'}>
            <h3>{product.productName} </h3>
              <FaTimes style={{cursor:'pointer', color:'red'}} onClick={() => onDelete(product.id)} />
            </div>
            <h4>{product.productPrice}</h4>
            <p>{product.productDiscription}</p>
        </div>
    )
}

export default Product
