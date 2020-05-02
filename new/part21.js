import React from 'react';
import { UncontrolledCollapse} from 'reactstrap';






export default class Part21 extends React.Component {
constructor(props){
  super(props);

  }


    render()
    {
    	return(
            <div>
    		
    
   
    
        
        
        <li id="toggler3" className="current11">10100 Cash</li>
        {''}{''}<li className="current11">10200 Accounts receivable </li>
        {''}{''}<li className="current11">10300 Allowance for doubtful accounts</li>
         {''}{''}<li className="current11" >10400 Inventory </li>
          {''}{''}<li onClick={this.props.part11} className="current11" id="cash1">10500 Prepaid expenses </li>
          {''}{''}<li className="current11" >10600 Marketable securities </li>
           {''}{''}<li  className="current11">10700 Interest receivable</li>
        {''}{''}<li className="current11" >10800 Fixed assets</li>
         {''}{''}<li  className="current11">10900 Accumulated depreciation</li>
          {''}{''}<li onClick={this.props.part12} className="current11" id="cash">11000 Notes receivable </li>
          
  
  
  
    </div>
);
    
}
}

