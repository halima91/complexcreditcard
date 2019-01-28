import React, { Component } from "react";
import './creditcard.css';


const rendercardnumber=number=>{
  
    number=number.toString()
  
   let strresult=''
    for(let i=0;i<number.length;i+=4){
        strresult=strresult + number.slice(i,i+4) +' '
    }
    console.log(strresult)
   return strresult
}
///////////////////////
const rendervalidthru=number=>{ 
    number=number.toString()
    if (number===''){return 'placeholder'}
   return  number.slice(0,2)+'/'+ number.slice(2).substring(0,2)
}


const Creditcard = (props) => {
  return <div className="credit-card">
    <h1 className="credit-card-title">{(props.companyName.toUpperCase())}</h1>
    <div className="credit-card-chip" />
    <div className="credit-card-content">
      <div className="credit-card-text">
          <h2 className="credit-card-number">
          {rendercardnumber(props.cardNumber.substring(0,16)) }
          </h2>
          <h2 className="credit-card-valid-thru">
            {rendervalidthru(props.cardValidThru)}
          </h2>
          <h2 className="credit-card-holder-name">
          {props.CARDHOLDER.substring(0,20).toUpperCase()}
          </h2>
      </div>
      <div className="credit-card-logo">
        <img src="https://i.ebayimg.com/images/g/B7MAAMXQgJRRBDvt/s-l300.jpg"/>
      </div>
    </div>
  </div>
};
export default Creditcard;
