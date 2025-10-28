import { Component } from "react";
import {Message, CounterApp} from "./components/dynamic"

export class App extends Component{
  render(){
    return <>
    <h1>app</h1>
    <CounterApp/>
    <Message/>
    </>
  }
}