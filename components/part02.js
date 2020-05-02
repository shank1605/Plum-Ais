import React from 'react';
import'../table.css';



export default class Part02 extends React.Component {
constructor(){
  super();
  this.state = {
    
    
     

    };
   

}




render()
    {
    return(

<div>
     <li><a  className="button5" onClick={this.props.details0}>
    Cash
    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.d1}</li> 
    <br/>
    <li><a  className="button5" onClick={this.props.details1}>
    Common-stock
    </a> &nbsp;{this.props.d2}</li>
    <br/>
    <li><a  className="button5" onClick={this.props.details2}>
    APIC CS
    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.d3}</li>
    </div>
    );
   
}
}
    
   