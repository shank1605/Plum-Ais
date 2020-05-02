import React from 'react';
import '../table.css';
export default class Newclick2 extends React.Component {
constructor(props){
  super(props);
  this.state = {
    
};
}
render(){
return(
<div className="newclick11">
    <div classname="" onClick={this.props.t3}>
      <div className="t11">
        <div className="col-sm-2">
        <table className="part">
        <td>
        <div className="head">Purchase Journal</div>
        </td>
        </table>
      </div>
    </div>
  </div>
    <div classname="" onClick={this.props.t4}>
      <div className="t12">
        <div className="col-sm-2">
          <table className="part">
          <td>
          <div className="head">Sales Journal</div>
          </td>
          </table>
        </div>
      </div>
    </div>
      <div classname="" onClick={this.props.t5}>
        <div className="t13">
          <div className="col-sm-2">
            <table className="part">
            <td>
            <div className="head">Receipts Journal</div>
            </td>
            </table>
          </div>
        </div>
      </div>
    <div classname="" onClick={this.props.t6}>
      <div className="t14">
        <div className="col-sm-2">
        <table className="part">
        <td>
        <div className="head">Disburse Journal</div>
        </td>
        </table>
        </div>
      </div>
    </div>
    <div classname="" onClick={this.props.t7}>
        <div className="t15">
          <div className="col-sm-2">
          <table className="part">
          <td>
          <div className="head">General Journal</div>
          </td>
          </table>
        </div>
      </div>
    </div>





































</div>












);
}
}