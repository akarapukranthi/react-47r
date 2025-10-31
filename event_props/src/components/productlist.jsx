import React, { Component } from "react";

export class ProductList extends Component {

    render() {
        console.log(this.props)
        return <div key={this.props.i} style={{width:"15rem"}}>
            <img src={this.props.productData.image} width={100}/>
            <p>${this.props.productData.price}</p>
            <h2>{this.props.productData.category}</h2>
            <h1>Card</h1>
        </div>
    }
}



