import React, { Component } from "react";
import Card from "./Card";
import Form from "./Form";
import img1 from "../assets/pic.jpeg"
import "./style.css"

import img2 from "../assets/pic2.jpeg"
class Cards extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Arr: [],
        }
    }
    GetCard = (card) => {
      
        this.state.Arr.push(card);
        this.setState({
            Arr:this.state.Arr
        })
        
      }
    
    
    render(){
        return (
            <div className="container-fluid  justify-content-ceter">
                <Form GetCard={this.GetCard} />
                    
                <div className="row d-flex" >
                        {
                            this.state.Arr.map(function(item, i){
                                return <Card imgsrc={img1} title={item.title} price={item.price} /> 
                            })
                        }
                </div>
                
            </div>
        )
    }
}

export default Cards