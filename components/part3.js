import React from 'react';
import {UncontrolledCollapse} from 'reactstrap';




export default class Part3 extends React.Component{
constructor(props){
  super(props);
  this.state = {
  	}
  }




  render()
{
return(

		<div className="part4">
    <a id="toggler6" className="button4">
    Details
    </a>
    <UncontrolledCollapse toggler="#toggler6">
    <li><a  className="button5">
    Cash
    </a></li>
    <li><a  className="button5">
    Common-stock
    </a></li>
    <li><a  className="button5">
    APIC CS
    </a></li>
    </UncontrolledCollapse>
    </div>
    );
    }
    }