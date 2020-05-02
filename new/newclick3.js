import React from 'react';
import '../table.css';
export default class Newclick3 extends React.Component {
constructor(props){
  super(props);
  this.state = {
    
};
}
render(){
return(
<div>


<div className="col-sm-2">
  <div className="new4">
  <table>

    <tr>
      <th>
      <td className="header10">&nbsp;&nbsp;X</td>
      <td className="header10">&nbsp;&nbsp;G</td>
      <td className="header10">&nbsp;&nbsp;F</td>
      <td className="header12">Journal</td>
      <td className="header11">&nbsp;&nbsp;{this.props.alpha}</td>

      </th>
    </tr>
    <tbody>
    <tr>
     <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;=&nbsp;Exercise</td>
    </tr>
    <tr>
     <td>&nbsp;&nbsp;&nbsp;&nbsp;G&nbsp;=&nbsp;Games</td>
    </tr>
    <tr>
     <td>&nbsp;&nbsp;&nbsp;&nbsp;F&nbsp;=&nbsp;Freestyle</td>
    </tr>
    </tbody>
</table>

  </div>
</div>



</div>












);
}
}