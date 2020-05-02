import React from 'react';
import '../table.css';
import DatePicker from 'react-datepicker';
import '../checked.png';


export default class Newtable extends React.Component {
constructor(props){
  super(props);
  this.state = {
    
};
}
render(){
return(

<div className="maintablenew">
    <table>
      <thead className="head">
        <tr className="head1">
          <td colSpan="13" className="title">Purchases Journal</td>
        </tr>
        <tr>
          <td colSpan="7"></td>
          <td>DEBIT</td>
          <td>CREDIT</td>
          <td colSpan="4"></td>
        </tr>
        <tr>
          <td colSpan="2"></td>
          <td colSpan="2">Sub-ledger</td>
          <td colSpan="2"></td>
          <td>Purchases</td>
          <td>Purch R&A</td>
          <td>Acc. Pssble</td>
          <td colSpan="4"></td>
        </tr>
        <tr>
          <td>Ref</td>
          <td>Date</td>
          <td>#</td>
          <td>Posted</td>
          <td>Vendor</td>
          <td>Vendor Invoice No.</td>
          <td>G/L 305.00</td>
          <td>G/L 306.00</td>
          <td>G/L 201.00</td>
          <td>Sub-ledger Acc No.</td>
          
          <td >Debit</td>
          <td >Credit</td>
          <td>Post Ref</td>
        </tr>
      </thead>
       {this.props.ledgers.map((r2)=>(
         <tr className="t1">

          <td>{r2.ref}</td>
          <td>{r2.date1}</td>
          <td>{r2.o2}</td>
          <td><span><img src="checked.png"/></span></td>
          <td>{r2.vendor}</td>
          <td>{r2.vendorin}</td>
          <td><input type="text" value={r2.g3} /></td>
          <td></td>
          <td><div className="i1"><input type="text" value={r2.g4} /></div></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          
        </tr>
))}




        <tr className="t1">

          <td>{this.props.ref1}</td>
          <td> <DatePicker onChange={this.props.handlechange} selected={this.props.startDate}/></td>
          <td>{this.props.o2}</td>
          <td><span>{this.props.im?<img src="checked.png"/>:null}</span></td>
          <td>{this.props.vendor}</td>
          <td>{this.props.vendorin}</td>
          <td><input type="text" value={this.props.g3} onChange={this.props.onchange1}/></td>
          <td></td>
          <td><div className="i1"><input type="text" value={this.props.g41} onChange={this.props.onchange2}/></div></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          
        </tr>

        
       
        
        <tr>
          <td colspan="13">
            <div className="row">
              <div className="col-4 offset-5">
                <div  className="button2" >Cancel</div>
                  <div className="button1" onClick={this.props.submitpost}>Post GL</div>
                   <div className="button10" onClick={this.props.toggle}>EOM</div>
                </div>
              </div>
          </td>
        </tr>
    </table>

    
    
    
  </div>
  



);
}
}