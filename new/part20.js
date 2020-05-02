import React from 'react';
import { UncontrolledCollapse} from 'reactstrap';






export default class Part20 extends React.Component {
constructor(props){
  super(props);
  this.state = {
  	description:''
    
     
     

    };
}


    render()
    {
    	return(
<div>
    		

    <div className="assetsc02" id="toggler2" >
    Balance Sheet
    </div>
    <UncontrolledCollapse toggler="#toggler2">
    
        <li  className="current11" id="cash0" onClick={this.props.part4}>26000 Common Stock</li>
        <li className="current11">27000 Paid in excess for par</li>
        <li className="current11">28000 Income summary</li>
        <li className="current11">29000 Retained earnings</li>
   
    </UncontrolledCollapse>



    <div className="assetsc03" id="toggler1" >
    Income statement temporary
    </div>
    <UncontrolledCollapse toggler="#toggler1">
    
        
        
        <li id="toggler3" className="current11">Gross profit
        <UncontrolledCollapse toggler="#toggler3">
        <li  className="current12" id="cash0" onClick={this.props.part4}>30100 Sales</li>
        <li className="current12">30200 Sales returns and allowances </li>
        <li className="current12">30300 Sales discounts</li>
        <li className="current12">30400 Cost of goods sold</li>
        <li className="current12">30500 Purchases</li>
        <li className="current12">30600 Purchases returns and allowances</li>
        <li className="current12">30700 Purchase discounts </li>
        <li className="current12">30800 Freight in </li>
        </UncontrolledCollapse>
        </li>


        <li  id="toggler4" className="current11">Other revenue
        <UncontrolledCollapse toggler="#toggler4">
        <li  className="current12" id="cash0" onClick={this.props.part4}>30900 Gain/loss sale of fixed assets</li>
        <li className="current12">31000 Gain/loss sale of marketable securtie </li>
        <li className="current12">31100 Interest/dividend income</li>
        <li className="current12">31200 Misc.revenue</li>
        </UncontrolledCollapse>
        </li>

        <li  id="toggler5" className="current11">Oper. expense
        <UncontrolledCollapse toggler="#toggler5">
        <li  className="current12" id="cash0" onClick={this.props.part4}>40100 Expense rent </li>
        <li className="current12">40200 Expense advertising </li>
        <li className="current12">40300 Expense office supplies</li>
        <li className="current12">40400 Expense depreciation</li>
        <li className="current12">40500 Expense Freight out</li>
        <li className="current12">40600 Expense-Fed. income tax</li>
        <li className="current12">40700  Expense interest  </li>
        <li className="current12">40800 Expense bad debt </li>
        <li className="current12">40900 Expense other operating  </li>
        </UncontrolledCollapse>
        </li>
  
    </UncontrolledCollapse>
    
    </div>
        );
    }
}