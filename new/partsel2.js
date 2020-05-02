import React from 'react';
import { UncontrolledCollapse} from 'reactstrap';






export default class Partsel2 extends React.Component {
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
    	<li  className="current11" id="cash0" onClick={this.props.click1}>201.10 Austin County </li>
        <li className="current11" onClick={this.props.click2}>201.06 Digital Services </li>
        <li className="current11" onClick={this.props.click3}>201.04 Fishy Back </li>
         <li className="current11" onClick={this.props.click4}>201.09 Handy Andy  </li>
          <li className="current11" onClick={this.props.click5}>201.01 Mason </li>
           <li className="current11" onClick={this.props.click6}>201.05 Piggy Back  </li>
            <li className="current11" onClick={this.props.click7}>201.02 Rudd </li>
             <li className="current11" onClick={this.props.click8}>201.08 Sharky & Sharky  </li>
              <li className="current11" onClick={this.props.click9}>201.07 Shield Protection  </li>
               <li className="current11" onClick={this.props.click10}>201.03 Skrill </li>
                <li className="current11" onClick={this.props.click11}>201.11 Zip-zap Electric </li>
        
   
</div>
        );
    }
}