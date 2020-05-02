import React from 'react';
import Submit3 from './submit3';
import '../table.css';
import Submittable from './submittable';




export default class Submit1 extends React.Component {
constructor(props){
  super(props);
  this.state = {
    
    bg:'',
    ltable:false,
    radio2:true,part:false
     

    };
    this.change=this.change.bind(this);
    

}


change(){
	this.setState({
		bg:'yellow',
		ltable:true
	})
}




render()
    {
    	return(





 <div classname="maintable">
<div className="row">
<div className="submit">
<div className="col-sm-2">
<div classname="submittable">
<table className="part" onClick={this.props.part}>
<td>
<div className="head">General Journal</div>
<br/><br/><br/><input type="checkbox" disabled onClick={this.props.part2}/>{''}Charts of accounts</td>
</table>
</div>

</div>
</div>
<div className="submit1">
<div className="col-sm-12 offset-1">
Transactions:<br/>
<input type="checkbox" onClick={this.props.part1} disabled/>{''}  1. Issues common stock for cash.<br/>
<input type="checkbox" onClick={this.props.radio} disabled={this.props.radio2}/>{''}  2. Acquired treasury stock,bundle.<br/>
<input type="checkbox" onClick={this.props.radio1} disabled={this.props.radio3}/>{''}  3. Reissued treasury stock.<br/>
<input type="checkbox"  onClick={this.props.radio10} />{''}  4. End of month<br/>
</div>
</div>


<div className="submit2">
<div className="col-sm-2 offset-6">

<table className="part" onClick={this.change} style={{backgroundColor:this.state.bg}}>
<td>

<div className="head">General Ledger</div>
<br/><br/><br/><input type="checkbox" onClick={this.props.part7}/>{''}G/L Accounts</td>
</table>

</div>
</div>


{this.props.part9?<Submittable/>:null}



</div>
</div>
);
}
}
    
   