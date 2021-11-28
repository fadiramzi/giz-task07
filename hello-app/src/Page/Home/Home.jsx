import React from "react";
import styled from "styled-components";

const  Bodw=styled.div`
background-color: #FFFAE2;
`;

const Container = styled.div`
  height: 100px;
  padding-top: 30px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  //justify-content: flex-end;
  justify-content: space-between;
`;

const buttons = styled.div`
  font-size: 14px;
 
`;

//ssss


const Bod=styled.div`
  flex-direction: row;
  //background-color:#FFFAE2;
  padding: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  //padding-bottom: 10px;
`;
const Card =styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    //padding-top: 20px;
    background-color: white;
    width: 15%;
    border-radius: 10px;
    //alt:"Avatar"; 
  `;

const RowText=styled.div`
display: flex;
flex-direction: row;
  justify-content: space-between;
`;
const Text=styled.div`
padding-left: 10px;
`;
const BottonB=styled.div`
background-color: black;
  
`;
const Ht6=styled.h6`
color: white;
  justify-content: center;
  text-align-last:center;
`;

class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            searchVal:"",
            price: '',
            name: '',
            filteredPoints:[
                {
                    name:"Air Max 95 U",
                    category:"Copy",
                    price:"$ 90",

                },
                {
                    name:"Nike ",
                    category:"Sneakers",
                    price:"$ 99",
                },
            ],
            Points : [
                {
                    name:"Air Max 95 U",
                    category:"Copy",
                    price:"$ 90",

                },
                {
                    name:"Nike ",
                    category:"Sneakers",
                    price:"$ 99",

                },
            ]
        }
        this.search_product = this.search_product.bind(this)
        this.addProduct=this.addProduct.bind(this)
        this.onNameChange = this.onNameChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
    }
    addProduct()
    {
        let tempPoints = this.state.Points;
        tempPoints.push(  {
            name:"short ",
            category:"Address",
            price:"$ 30",

        },)
        this.setState({
            filteredPoints:tempPoints
        })

    }
    search_product(e) {
        let newValue = e.target.value;
        let tempPoints = this.state.Points;
        // search
        if(!newValue)
        {
            this.setState({
                searchVal:newValue,
                filteredPoints:this.state.Points
            });
            return
        }
        let filtered = tempPoints.filter((item)=>{
            return item.name.toLowerCase() == newValue.toLowerCase()
        });
        this.setState({
            searchVal:newValue,
            filteredPoints:filtered
        });
    }
    onNameChange(e){
        this.setState({
            name: e.target.value
        });
    }

    onPriceChange(e){
        this.setState({
            price: e.target.value
        });
    }
    render() {
        return <Bodw>
            <div>
                <Container>
                    <Wrapper>
                        <Left>
                            <input  onChange={this.search_product}
                                    value={this.state.searchVal} type="text"
                                    placeholder={'Search Product'} />
                        </Left>

                        <Right>

                            <input    value={this.state.name}
                                      onChange={this.onNameChange}
                                      placeholder={'Name'} />
                            <input  value={this.state.price}
                                    onChange={this.onPriceChange}
                                    placeholder={'Price'} />
                            <buttons ><button onClick={this.addProduct}>Add new</button></buttons>
                        </Right>
                    </Wrapper>

                </Container>
                {
                    this.state.filteredPoints.map((item=><Bod key={item.id}><Card>
                        <img src={'./assets/img.png'}/>
                        <h6>{item.category}</h6>
                        <RowText>
                            <h6>{item.name}</h6>
                            <Text>{item.price}</Text>
                        </RowText>
                        <BottonB>
                            <Ht6>add new</Ht6>
                        </BottonB>


                    </Card></Bod>))
                }
            </div>
        </Bodw>
    }
    }
export default Home;