import React, { Component } from "react";
import {ProductList} from "./productlist";
// import productdata from "../assets/data/products.json";

export class ProductCard extends Component {

    render() {
        return <div>
            <h1>{this.props.cardtitle}</h1>
            {this.props.product.map((product, index)=> <ProductList productData={product} i={index}/>)}
               
               
        </div>
    }
}


