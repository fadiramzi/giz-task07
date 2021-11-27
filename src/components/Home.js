import React from 'react'
import cat from "./assets/cat.jpg"
import Style from "./Style.css"
import AddNew from './AddNew';
import Search from './Search';
import Card from './Cards';
class Home extends React.Component{
    constructor(props)
    {
        super();
        this.state={
            searchVal:"",
            Cardsl : [
                {
                    name:"Shirazi Cat",
                    type:"Cat",
                    price:"200$",
                    img: cat
                },
                {
                    name:"Shirazi Cat",
                    type:"Cat",
                    price:"200$",
                    img: cat
                },
            ],
            Templ : [
                {
                    name:"Shirazi Cat",
                    type:"Cat",
                    price:"200$",
                    img: cat
                },
                {
                    name:"Shirazi Cat",
                    type:"Cat",
                    price:"200$",
                    img: cat
                },
            ]
        }
        this.addProduct = this.addProduct.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)
    }
    addProduct(){
        let tempProduct = this.state.Templ;
        tempProduct.push(
            {
                name:"Shirazi Cat",
                type:"Cat",
                price:"200$",
                img: cat
            }
        )
        this.setState(tempProduct)
    }
    onSearchChange(e){
        let newValue = e.target.value;
        let tempPoints = this.state.Cardsl;
        if(!newValue){
            this.setState({
                searchVal:e.target.value,
                Templ:this.state.Cardsl,
            })
            return
        }
        let filtered = tempPoints.filter((item)=>{
            return item.name == newValue
        })
        this.setState({
            searchVal:e.target.value,
            Templ:filtered,
        })
    }
    render() {
        return (
            <div>
                <div className='Header'>
                    {/* The inputs and button */}
                    {/* Search input */}
                    <form>
                        <input placeholder='Search Product' onChange={this.onSearchChange} value={this.state.searchVal} type="text" id="search" />
                    </form>
                    {/* Add Btn */}
                    <div>
                        <AddNew value="Add New" handelClick={this.addProduct} />
                    </div>
                </div>





                {/* The Products */}
                <div className='flexView'>
                    {
                        this.state.Templ.map((item)=>{
                            return <Card item={item} />
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Home
    