import React from 'react';
import { UncontrolledCollapse} from 'reactstrap';






export default class Partsel1 extends React.Component {
constructor(props){
  super(props);
  this.state = {
  	description:''
    
     
     

    };
}


    render()
    {
    	return(
<div >
    	<li  className="current11" id="cash0" onClick={this.props.part4}>01 Abba</li>
        <li className="current11">02 Crosby</li>
        <li className="current11">03 Nash</li>
        
   
</div>
        );
    }
}