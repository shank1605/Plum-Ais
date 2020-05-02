import React from 'react';





export default class Part0 extends React.Component {
constructor(props){
  super(props);
  this.state = {
    
    
     

    };

}



render()
    {
    	return(





 <div className="maintable0">
<div className="row">
<div className="part1">
<div className="col-sm-2">

<table className="part" onClick={this.props.part}>
<td>
<div className="head">General Journal</div>
<br/><br/><br/>&nbsp;<input type="checkbox" onClick={this.props.part2}/>{''}Charts of accounts</td>
</table>

</div>
</div>
<div className="part2">
<div className="col-sm-12 offset-1">
Transactions:<br/>
<input type="checkbox" onClick={this.props.part1}/>{''}  1. Issues common stock for cash.<br/>
<input type="checkbox" disabled/>{''}  2. Acquired treasury stock,bundle.<br/>
<input type="checkbox" disabled/>{''}  3. Reissued treasury stock.<br/>
<input type="checkbox" disabled/>{''}  4. End of month<br/>
</div>
</div>


</div>
</div>
);
}
}
    
   