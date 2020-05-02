import React from 'react';
import './table.css';
import New1 from './new1';
import New2 from './new2';
import Part from './components/part'
export default class Project extends React.Component {
constructor(props){
  super(props);
  this.state = {
    s1:true,s2:false
    
};
this.chart=this.chart.bind(this);
}

chart(){
  this.setState({
    s2:true,
    s1:false
  });
}


render(){
return(
<div>

{this.state.s1?<New1 chart1={this.chart}/>:null}
{this.state.s2?<Part/>:null}




























</div>












);
}
}