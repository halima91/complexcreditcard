import React, { Component } from 'react';

class Form extends Component {
   constructor(props){
       super(props)
    //    this.state={keyword : ''}
   }

   handelchange=(event)=>{
  
    this.setState({[event.target.name] : event.target.value})
if([event.target.name]=='keyword'){this.props.recupererCardholder(event.target.value)}
    
 else if([event.target.name]=='cardnumber')   {this.props.recupererCardnumber(event.target.value.split('').filter(e=>isNaN(e)==false).join(''))}
 else if([event.target.name]=='validthru')   {this.props.recupererValidthru(event.target.value.split('').filter(e=>isNaN(e)==false).join(''))}

   }
    render() { 
        return ( <div className='form'>
            <input className="form-input1" name="keyword" type="text" onChange={this.handelchange}  />
            <br/>
            
            <input className="form-input2" name="validthru" type="text" onChange={this.handelchange} /><br/>
            <input className="form-input3" name="cardnumber" type="text"onChange={this.handelchange} />
        </div> );
    }
}
 
export default Form;