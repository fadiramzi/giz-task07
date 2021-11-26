import React,{useState} from 'react'
import './App.css'
import Card from './Card'
import Button from './Button'
import Input from './Input'

function App() {
    const [rerender, setRerender] = useState(false)
    const [products, setProducts] = useState([
        {
            name: "A",
            price: 99,
            desc: "Sneakers"
        },
        {
            name: "B",
            price: 99,
            desc: "Sneakers"
        },
        {
            name: "C",
            price: 99,
            desc: "Sneakers"
        },
    ])
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [search, setSearch] = useState("", () => {
        console.log("asdasdasd")
    })

    function on_prod_name_changed(e) { setName(e.target.value) }
    function on_prod_price_changed(e) { setPrice(e.target.value) }
    function add_product(e) {
        let new_products = products
        new_products.push({
            name: name,
            price: price,
            desc: "Sneakers"
        })
        setProducts(new_products)
        setRerender(!rerender)
    }
    function on_search_changed(e) {
        setSearch(e.target.value)
        let search_term = search
        let new_products = products.filter(p => p.name == search_term)
        // console.log(new_products)
        // setProducts(new_products)
        // setRerender(!rerender)
    }

    return (
        <div className="App">
            <div className="controls">
                <div className="search_box"><Input placeholder="Search Products" onChange={on_search_changed}/></div>
                <div></div>
                <Input placeholder="Name" onChange={on_prod_name_changed}/>
                <Input placeholder="Price" onChange={on_prod_price_changed}/>
                <Button value="Add New" onClick={add_product}/>
            </div>
            <div className="grid">{products.map((p, i) => <Card name={p.name} price={p.price} desc={p.desc} key={i}/>)}</div>
        </div>
    )
}

export default App
