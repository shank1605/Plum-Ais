import React from 'react';
import Part03 from './components/part03';
import Part04 from './components/part04';
import Part05 from './components/part05';
import './computeryellow.png';
import './db-green-rj-new.png';
import { UncontrolledTooltip } from 'reactstrap';
import'./table.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';






 class Table extends React.Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
   
    this.toggle1 = this.toggle1.bind(this);
    
   
    this.state = {
      tooltipOpen: false,
      
      dropdownOpen: false,
      description:'',
      ref:'R1',
      date:'',
      gla:'',
      startDate: new Date()

      
    };
    this.handlechange=this.handlechange.bind(this);
  }

  toggle1() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }


handlechange(date){
  this.setState({
    startDate:date
    });
}
 
 
 
  







render()
 {



return (

        <div className="maintable">
            <div className="row">
              <div className="col-lg-10">
                <div className="table1">
                  <div className="row">
                    <div className="col-sm-2">
                        <h7> <b/> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;     On-the-fly</h7>
                    </div>
                            <div className="col-sm-2 " id="radio1">
                                  <input type="radio" disabled value="1"/>     Purchases
                            </div>
                            <div className="col-sm-2 " id="radio1">
                                  <input type="radio" disabled value="1"/>     Sales
                            </div>
                            <div className="col-sm-2 " >
                                <input type="radio" value="1"/>     Receipts
                            </div>
                            <div className="col-sm-2 " id="radio1">
                                <input type="radio" disabled value="1"/>     Disbursements
                            </div>
                            <div className="col-sm-2 " id="radio1">
                                <input type="radio" disabled value="1"/>     General
                            </div>
                   </div>
                </div>
              <table className="main">
                <thead>
                  <tr>
                    <th className="one">Ref</th>
                    <th className="two">Date</th>
                    <th className="three">Gl account</th>
                    <th className="four">Description</th>
                    <th className="five">Debit</th>
                    <th className="six">Credit</th>
                  </tr>
                </thead>
                  <tr>
                    <td rowSpan="3">{this.props.ref1}</td>
                    <td rowSpan="3">{this.props.date ? <DatePicker onChange={this.props.handlechange} selected={this.props.startDate}/>:null}</td>
                    <td>{this.props.gla}</td>
                    <td>{this.props.desc}</td>
                    <td>{this.props.part03 ? <Part03 d4={this.props.d4}/>:null}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>{this.props.gla1}</td>
                    <td>{this.props.desc1}</td>
                    <td></td>
                    <td>{this.props.part04 ? <Part04 d5={this.props.d5}/>:null}</td>
                  </tr>
                  <tr>
                    <td>{this.props.gla2}</td>
                    <td> {this.props.desc2} </td>
                    <td></td>
                    <td>{this.props.part05 ? <Part05 d6={this.props.d6}/>:null} </td>
                  </tr>
                  <tr>
                    <td colSpan="6" className="exp">Explanation:     {this.props.des}</td>
                  </tr>
                  <tr>
                    <td colspan="6">
                        <div className="row">
                        <div className="col-4 offset-5">
                        <div  className="button1" >Cancel</div>
                        <div className="button2" onClick={this.props.submit}>Submit</div>
                        </div>
                        </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
     
)
}
}
export default Table;
