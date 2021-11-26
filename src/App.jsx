import React,{useState, useEffect} from 'react'
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
    const [productsFiltered, setProductsFiltered] = useState([])

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [search, setSearch] = useState("")

    function on_prod_name_changed(e) { setName(e.target.value) }
    function on_prod_price_changed(e) { setPrice(e.target.value) }
    function add_product(e) {
        let new_products = products
        new_products.push({
            name: name || "Name",
            price: price || 0,
            desc: "Sneakers"
        })
        setProducts(new_products)
        setRerender(!rerender)
    }

    useEffect(() => {
        if (search == "") {
            setProductsFiltered(products)
        } else {
            setProductsFiltered(products.filter(p => p.name.toLowerCase() == search.toLowerCase()))
        }
        setRerender(!rerender)
    })

    return (
        <div className="App">
            <div className="controls">
                <div className="search_box"><Input placeholder="Search Products" onChange={(e) => {setSearch(e.target.value)}}/></div>
                <div></div>
                <Input placeholder="Name" onChange={on_prod_name_changed}/>
                <Input placeholder="Price" onChange={on_prod_price_changed}/>
                <Button value="Add New" onClick={add_product}/>
            </div>
            <div className="grid">{productsFiltered.map((p, i) => <Card name={p.name} price={p.price} desc={p.desc} key={i}/>)}</div>
        </div>
    )
}

export default App
