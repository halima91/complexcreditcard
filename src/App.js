import React, { Component } from "react";
import "./App.css";
import Creditcard from "./creditcard";
import Form from './form'
class App extends Component {
  constructor(props){
    super(props)
    this.state={word:'',longnumber:'',smallnumber:''}
  }
  recupererCardholder=(k)=>{
this.setState({word:k})
  }
  recupererCardnumber=(k)=>{
    this.setState({longnumber:k})
      }
      recupererValidthru=(k)=>{
        this.setState({smallnumber:k})
      }
  render() {
    return (
      <div className="App">
        <Creditcard
          companyName="credit card"
          cardNumber={this.state.longnumber}
          cardValidThru={this.state.smallnumber}
          CARDHOLDER={this.state.word}
        />
      
        <Form recupererCardholder={this.recupererCardholder} recupererCardnumber={this.recupererCardnumber}  recupererValidthru={this. recupererValidthru}/>

      </div>
    );
  }
}

export default App;
