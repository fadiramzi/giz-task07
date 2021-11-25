import React,{useState,useEffect}  from 'react';
import SearchInput from './searchInput.jsx'
import Button from './button.jsx';
import ProductCart from './productCart.jsx';
import AddInput from './addInput.jsx'
import jsonData from './data.json';

const loadData = () => JSON.parse(JSON.stringify(jsonData));
const mydata=loadData();


const Products = () => {

    const [addProductName,setAddProductName]=useState('');
    const [addProductPrice,setAddProductPrice]=useState('');
    const [productList,setproductList]=useState([]);
 
    let KEY=1;
    const addingProductList = () => {
        console.log("hh");
       return  setproductList([...productList,  mydata.map(element => {
                console.log("kk");
                return <ProductCart key={KEY++} name={element.name} price={element.price} src={element.image}/>;
            })]
    )
    }
    
    

    const onchangeName = (data) => {
        setAddProductName(data)
    }
    const onchangePrice = (data) => {
        setAddProductPrice(data)
    }
 useEffect(() => {
    addingProductList();  
 }, []);


    const addBtn =()=>{
        setproductList([...productList,  
             <ProductCart key={KEY++} name={addProductName} price={addProductPrice} src={"https://img.stadiumgoods.com/jordan-air-jordan-11-retro-cool-grey-2021_17565419_36444742_2048.jpg"}/>])
    }
        
    const onchangeSearch = (data) => {
        console.log("ello");
        const filteredProduct = mydata.filter(
            
            product => {
                console.log(product);
              return (
                product
                .name
                .toLowerCase()
                .includes(data.toLowerCase())
              );
            }
          );
      
        setproductList(filteredProduct.map(element => {
            return <ProductCart key={KEY++} name={element.name} price={element.price} src={element.image}/>;
        }))
    }


return (

<div className='wrapper'>
    
    <div className='header'>
        <SearchInput placeholder="search here.." onchange={(e) => { onchangeSearch(e)}} />
        <AddInput data={addProductName} placeholder="Name" className="nameIn" onchange={(e) => { onchangeName(e)}} />
        <AddInput data={addProductPrice} placeholder="Price" className="priceIn"  onchange={(e) => { onchangePrice(e)}} />
        <Button value="Add New" className="addBtn"  onClick={() => addBtn()}/>
    </div>
    <div className="productListt">
         
    { 
    productList
    }
    </div>
</div>
);
}

export default Products;