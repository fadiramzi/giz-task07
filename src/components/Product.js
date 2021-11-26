import {FaTimes} from 'react-icons/fa'
import Button from './Button'

const Product = ({product, onDelete}) => {
    const onClick = () => {
        alert('Add to cart succefuly')
    }
    return (
        <div className={'product'}>

         <div>
             
            <div className={'deleteDiv'}>
               <FaTimes style={{cursor:'pointer', color:'red'}} onClick={() => onDelete(product.id)} className={'deletex'} />
            </div>
               <img src={product.productImg} alt='' height='180px' width='210px' />

         </div>

            <div className={'prodName'}>
                <div style={{ fontSize: '14px', color: '#707070'}}>{product.productDiscription}</div>

                <div className={'nameDiv'}>
                    <p style={{fontWeight: 'bold'}}>{product.productName}</p>
                    <p style={{ fontSize: '14px', color: '#707070'}}>{product.productPrice}</p>
                </div>
                    
            </div>

            <div>
                <Button name='Add to cart' styles='btnAddCart' onClick={onClick} />
            </div>

        </div>
    )
}

export default Product
