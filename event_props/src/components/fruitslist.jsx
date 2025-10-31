import { Component } from "react";

export class FruitsList extends Component{
    render(){
        return <div>
            <ul>{this.props.fruits.map((value,index)=>(<li key={index}>{value}</li>))}</ul>
        </div>
    }
}