import React from 'react';
import { UncontrolledCollapse} from 'reactstrap';






export default class Part2 extends React.Component {
constructor(props){
  super(props);

  }


    render()
    {
    	return(
            <div>
    		
    <li id="toggler3" className="assetsc" style={{ marginBottom: '1rem' }}>
    Balance Sheet
    </li>
    <UncontrolledCollapse toggler="#toggler3">
    
        <li  id="toggler3"><h6>Paid in capital</h6></li>
        
        <li id="toggler3" className="current">Par</li>
        {''}{''}<li className="current1"> Preferred class A</li>
        {''}{''}<li className="current1">Preferred class B</li>
         {''}{''}<li className="current1" >Preferred class C</li>
          {''}{''}<li onClick={this.props.part11} className="current1" id="cash1">Common Stock</li>
          {''}{''}<li className="current" >Add I-paid-in-capital</li>
           {''}{''}<li  className="current1">Preferred class A</li>
        {''}{''}<li className="current1" >Preferred class B</li>
         {''}{''}<li  className="current1">Preferred class C</li>
          {''}{''}<li onClick={this.props.part12} className="current1" id="cash">Common Stock</li>
          <li className="current">Accum other comp.</li>
          <li className="current">Retained Earning</li>
          <li className="current">Treasury Stock</li>

  
    </UncontrolledCollapse>
  
    </div>
);
    
}
}

