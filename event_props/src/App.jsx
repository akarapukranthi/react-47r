import { Component } from "react";
import { InputTag } from "./components/inputcomp";
import { FruitsList } from "./components/fruitslist";
import { StudentList } from "./components/studentlist";
import {ProductCard} from "./components/productcard";
import productData from "./assets/data/products.json";
class App extends Component {

  render() {
    const fruits = ["Apple", "Banana", "Mango", "Orange"];

    const students = [
  { id: 1, name: "John", grade: "A" },
  { id: 2, name: "Emma", grade: "B" },
  { id: 3, name: "Liam", grade: "C" }
];

    return <div>

      <h1>Event Props</h1>
      <InputTag/>
      <FruitsList fruits={fruits}/>
      <StudentList students={students} />
      <hr/>
      <ProductCard product={productData} cardtitle="All products"/>
    </div>
  }
}

export default App;