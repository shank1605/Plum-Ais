import React from 'react';
import'../table.css';

import Part06 from './part06';



export default class Part10 extends React.Component {
constructor(props){
  super(props);
  this.state = {
    
   showed1:false
     

    };
   
    this.show1=this.show1.bind(this);
}





show1(){
  this.setState({

  showed1:true
});
}



render()
    {



return(
<div className="">
<div className="part4">

 <li><a  className="button4" onClick={this.show1}>
   Details
    </a></li>
    <br/>
    
 { this.state.showed1 ? <Part06  d1={this.props.d1} d2={this.props.d2} d3={this.props.d3} details0={this.props.details00} details1={this.props.details01} details2={this.props.details02}/>:null}
 
      

</div>
</div>



    

);
}
}
    
   