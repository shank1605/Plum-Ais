import React from 'react';

import './computeryellow.png';
import './db-green-rj-new.png';

import Table from './table';
import Table1 from './table1';
import Part1 from './components/part1';
import Part2 from './components/part2';
import Part from './components/part';
import'./table.css';
import New2 from './new2';



export default class App1 extends React.Component {
constructor(props){
  super(props);
  this.state = {
    one:[],
    checked:false,
    size:''
     
     

    };
this.handlechange=this.handlechange.bind(this);
}

handlechange(e){
        this.setState({
          checked:!this.state.checked,
          size:e.target.value
        });
      }
render()
{
return(
<div>
<Part/>
</div>


);
}
}


  







      


  



  

        
  
