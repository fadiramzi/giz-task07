import React from "react";
import styled from "styled-components";


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
    padding-top: 20px;
    background-color: white;
    width: 15%;
    border-radius: 10px;
    //alt:"Avatar"; 
  `;
// const image=styled.div`
// padding: ;
// `;
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
class Body extends React.Component{
    constructor() {
        super();
    }
    render() {
        return <Bod>
        <Card>
           <img src={'src/assets/img.png'}/>
            <h6>Sneakers</h6>
             <RowText>
                 <h6>Air max 95 u</h6>
                 <Text>90$</Text>
             </RowText>
            <BottonB>
                <Ht6>add new</Ht6>
            </BottonB>


        </Card>
        </Bod>
    }
}
export default Body;