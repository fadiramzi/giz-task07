import React from 'react'
import Buttons from './Buttons'
import PropTypes from 'prop-types'

const Product = (props) => {
   
    return (
        
        <div className="cart">
            <div>
            <img src="./pics/Image1.png" alt="" width="200px" height="200px" />

            </div>
            <div>
                <h6>{props.type}</h6>
                <h3>{props.description}</h3> <h6 className="prc">{props.price}</h6>
            </div>
            <div className="adddiv">
            <Buttons className="addtocartbtn"  caption="Add to Cart"/>

            </div>

        </div>
    )
}
Product.defaultProps={
    type:' sneakers',
    description:' Air Max 95 U',
    price:'99$',
}

export default Product