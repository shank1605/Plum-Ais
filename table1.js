import React from 'react';
import './computeryellow.png';
import './db-green-rj-new.png';
import Part1 from './components/part1';
import Part2 from './components/part2';
import './table1.css';
export default class Table1 extends React.Component {
constructor(props){
  super(props);
  this.state = {
    show:false,
    show1:false,
    show3:false,
    description:'',bg1:'',bg:''
  };
    this.equity=this.equity.bind(this);
    this.assets=this.assets.bind(this);
}
equity(){
this.setState({show:!this.state.show,bg1:'',show1:this.state.show3,bg:'yellow'});
}
assets(){
this.setState({show1:!this.state.show1,
    show:this.state.show3,
    bg1:'yellow',
    bg:''
});
}
render(){
return(
<div className="maintable1">
    <table className="chart">
      <tr className="header">
        <th colSpan="3" >
          <div className="header">Chart of Accounts</div>
        </th>
      </tr>
      <tr id="cash5">
        <th onClick={this.assets} style={{backgroundColor:this.state.bg1}}>
          Assets
        </th>
        <th onClick={this.props.hide1}>
          Liab.
        </th>
        <th onClick={this.equity} style={{backgroundColor:this.state.bg}}>
          O.Equity
        </th>
      </tr>
    </table>
  <div className="panel">
    {this.state.show1 ? <Part1 part4={this.props.part3}/>:null}
    {this.state.show ? <Part2 part11={this.props.part5} part12={this.props.part6}/>:null}
  </div>
</div>
);
}
}