import React from 'react'
import Button from './Button'
import './Home.css'

const AddNewProduct = (props) => {
    return (
        <>
            <Button value ='Add New' handelClick={props.handelClick} />
        </>

    )
}

export default AddNewProduct
