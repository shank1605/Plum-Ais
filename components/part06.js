import React from 'react';
import'../table.css';



export default class Part06 extends React.Component {
constructor(){
  super();
  this.state = {
    
    
     

    };
   

}




render()
    {
    return(

<div>
     <li><a  className="button5">
    Cash
    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.d1}</li> 
    <br/>
    <li><a  className="button5">
    Treasury Stock
    </a> &nbsp;{this.props.d2}</li>
    <br/>
    
    
    </div>
    );
   
}
}
    
   