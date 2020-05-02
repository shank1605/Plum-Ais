import React from 'react';
import'../table.css';
import Part02 from './part02';
import Part06 from './part06';



export default class Part01 extends React.Component {
constructor(props){
  super(props);
  this.state = {
    
    showed:false,showed1:false
     

    };
    this.show=this.show.bind(this);
 
}


show(){
this.setState({
	showed:true
})

}




render()
    {



    	return(
<div className="">
<div className="part4">

 <li><a  className="button4" onClick={this.show}>
   Details
    </a></li>
    <br/>
    
 { this.state.showed ? <Part02  d1={this.props.d1} d2={this.props.d2} d3={this.props.d3} details0={this.props.details00} details1={this.props.details01} details2={this.props.details02}/>:null}

      

</div>
</div>



    

);
}
}
    
   