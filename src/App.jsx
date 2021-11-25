// import { useState } from 'react'
import './App.css'
import Card from './Card'
import Button from './Button'
import Input from './Input'

// <Card name='Air Max 95 U' price='1.99' desc='Sneakers'/>

function App() {
    let products = [
        {
            name: "Air Max 95 U",
            price: 99,
            desc: "Sneakers"
        },
        {
            name: "Air Max 95 U",
            price: 99,
            desc: "Sneakers"
        },
        {
            name: "Air Max 95 U",
            price: 99,
            desc: "Sneakers"
        },
    ]
    let cards = products.map((p, i) => <Card name={p.name} price={p.price} desc={p.desc} key={i}/>)

    let add_prod_name = ""
    let add_prod_price = 0

    function add_product(e) {
        // alert(a)
        // products.push({
        // })
    }

    add_product()

    return (
        <div className="App">

            <div className="controls">
                <div className="search_box"><Input placeholder="Search Products"/></div>
                <div></div>
                <Input placeholder="Name"/>
                <Input placeholder="Price"/>
                <Button value="Add New" onClick={add_product}/>
            </div>

            <div className="grid">{cards}</div>
        </div>
    )
}

export default App
