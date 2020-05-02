import React from 'react';
import { UncontrolledCollapse} from 'reactstrap';






export default class Part1 extends React.Component {
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
    		

    <div className="assetsc" id="toggler2" >
    Current
    </div>
    <UncontrolledCollapse toggler="#toggler2">
    
        <li  className="current" id="cash0" onClick={this.props.part4}>101.Cash</li>
        
        <li className="current">102. Accts receivable</li>
        <li className="current">103. Allow. for bad debts</li>
        <li className="current">104. S-T investments</li>
   <li className="current">105. Inventory s</li>
    <li className="current">106. Prepaid </li>
    </UncontrolledCollapse>



    <div className="assetsc1" id="toggler1" >
    Long-term
    </div>
    <UncontrolledCollapse toggler="#toggler1">
    
        
        
        <li id="toggler2" className="current">Liabilities</li>
        <li  id="toggler3" className="current">PP & E</li>
        <li  id="toggler4" className="current">Other</li>
  
    </UncontrolledCollapse>
    
    </div>
    



    		);
    }
}