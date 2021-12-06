import iphone from "./image/iphone.jpg"
import iphone12 from "./image/iphone12.jpg"
import iphone8plus from "./image/iphone8plus.jpg"
import iphone15 from "./image/iphone15.jpg"
import { useEffect, useState } from "react"
import OneProduct from "./OneProduct"
import AddNewProduct from './AddNewProduct'
import './Home.css'



const Home = () => {
    
    const [products, setProducts] = useState([
        {
            name:"iphone13",
            price:"$1400",
            description:"phone",
            image: iphone,
        },
        {
            name:"iphone12",
            price:"$1000",
            description:"phone",
            image: iphone12,
        },
        {
            name:"iphone 8 plus",
            price:"$700",
            description:"phone",
            image:iphone8plus,
        }
    ])
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const addnew = () => {
        if (name==='')
        {
            alert('please enter a product name')
            return
        }
        if (description==='')
        {
            alert('please enter a product description')
            return
        }

        let tempCart = {
            name:name,
            price:price,
            description:description,
            image:iphone15
        }

            setProducts([...products,tempCart])
            setName('')
            setPrice('')
            setDescription('')

    }
    const [fillterd, setFillterd] = useState(products)

    const searchHandler = (e) =>{
        let inputSearch = e.target.value
        let filteredProduct= products.filter((item) => {
            return  item.name.toLowerCase().includes(inputSearch.toLowerCase())
          })
          setFillterd(filteredProduct)


    }
    useEffect(() => {
        setFillterd(products)
   
    }, [products])
    return (
        <div>

       {/* input name */}
       <div className='inputt'>
        <input
         type="text"
          placeholder='Name'
          value={name}
          onChange={(e)=> setName(e.target.value)}
            />
        </div> 

        {/* input Price*/}
       <div className='inputt'>
       <input type="Number"
        placeholder="Price"
        value={price}
        onChange={(e)=> setPrice(e.target.value)}
        />
       </div>

       {/* input description */}
       <div className='inputt'>
        <input type="text"
         placeholder='description'
         value={description}
         onChange={(e)=> setDescription(e.target.value)}
         />
        </div>

          {/* input search */}
    <div className='inputt'>
    <input placeholder='Search Product' 
    type="text"
    onChange={searchHandler} />

          {/* but Add new */}
       <div>
           <AddNewProduct handelClick={addnew} />
       </div>
       </div>

        <div>
            {fillterd.map((product , index) => (<OneProduct 
            key={index} 
            name= {product.name} 
            price= {product.price} 
            description= {product.description} 
            image= {product.image} 
            />))}
        </div>
        </div>
    )
}

export default Home