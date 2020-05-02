import React from 'react';
import './table.css';
import Newclick1 from './new/newclick1';
import Newclick2 from './new/newclick2';
import Newclick3 from './new/newclick3';
import Newtable from './new/newtable';
import Text1 from './new/text';
import { UncontrolledCollapse} from 'reactstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class New2 extends React.Component {
constructor(props){
  super(props);
  this.state = {

    show1:false,
    show2:false
    ,show3:false,
    alpha:'',show4:false,four:false,next1:false,next21:false,next31:false,next41:false
    ,showtable:false
};
this.t1=this.t1.bind(this);
this.t2=this.t2.bind(this);
this.t3=this.t3.bind(this);
this.t4=this.t4.bind(this);
this.t5=this.t5.bind(this);
this.t6=this.t6.bind(this);
this.t7=this.t7.bind(this);
this.click=this.click.bind(this);
this.next=this.next.bind(this);
this.next1=this.next1.bind(this);
this.next2=this.next2.bind(this);
this.next3=this.next3.bind(this);
this.showt=this.showt.bind(this);

}





t1(){
  this.setState({
    show1:true,
    show2:false
  });

}


t2(){
  this.setState({
    show2:true,
    show1:false
  });

}
t3(){
  this.setState({
    show3:true,
    alpha:'P',show4:true
    
  });

}

t4(){
  this.setState({
   
    alpha:'S'
    
  });

}
t5(){
  this.setState({
   
    alpha:'R'
    
  });

}
t6(){
  this.setState({
   
    alpha:'D'
    
  });

}
t7(){
  this.setState({
   
    alpha:'G'
    
  });

}
click(){
  this.setState({
   
   four:true,
   show3:false
    
  });
  this.showt();

}

next(){
  this.setState({
   
   next1:true,
   next21:false,
    next31:false,
     next41:false,

    
  });

}
next1(){
  this.setState({
   
   next21:true,
   next31:false,
     next41:false,
   next1:false
    
  });

}
next2(){
  this.setState({
   
   next31:true,
   next41:false,
   next1:false,
   next21:false
    
  });

}
next3(){
  this.setState({
   
   next41:true,
   next1:false,
   next21:false,
   next31:false

    
  });

}


showt(){
  if(this.state.alpha==='P')
  {
    this.setState({showtable:true});
  }
  console.log(this.state.alpha);
}






render(){
return(
<div>



{this.state.show3?<Text1/>:null}
{this.state.showtable?<Newtable/>:null}







<div className="col-sm-2">
<div className="maintable1">
<div className="new2">
<table className="chart">
<tr className="header">
<th colSpan="3" >
<div className="header">Chart of Acc</div>
</th>
</tr>
<tr id="cash5">
<th onClick={this.props.chart1} style={{backgroundColor:this.state.bg1}}>
Assets
</th>
<th onClick={this.props.hide1}>
Liab.
</th>
<th onClick={this.equity} style={{backgroundColor:this.state.bg}}>
O.Equity
</th>
</tr>
</table>

</div>
</div>
</div>







<div className="col-sm-2">
<div className="new1">


<table className="chart">
<tr  >
<th colSpan="3" >
<div className="header1" id="toggler" onClick={this.click}>Ledgers</div>
</th>
</tr>
<tr>
{this.state.four?
<div className="four1">
<div className="header2" onClick={this.next}>G/L</div><div className="header2" onClick={this.next1}>A/R</div>
<div className="header2" onClick={this.next2}>A/P</div><div className="header2" onClick={this.next3}>Inv</div>
</div>:null}
</tr>
<tr className="next">
<div >
{this.state.next1?
<div>
<div className="header3">Assests</div><div className="header3">Liabilities</div>
<div className="header3">Equities</div><div className="header3">Inc.Statement</div></div>
:null}
{this.state.next21?<div className="header4">Customers</div>:null}
{this.state.next31?<div className="header4">Vendors</div>:null}
{this.state.next41?<div className="header4">Products</div>:null}
</div>
</tr>
</table>





</div>
</div>




{this.state.show4?<Newclick3 alpha={this.state.alpha}/>:null}



















<div className="col-sm-2">
  <div className="new3">
  <table>

    <tr>
      <th colSpan="3" >
      <div className="header">System Environment</div>

      </th>
    </tr>
    <tr>
     <td>&nbsp;&nbsp;<input type="radio"/>&nbsp;Manual&nbsp;&nbsp;&nbsp;<input type="radio"/>&nbsp;Daily&nbsp;&nbsp;&nbsp;<input type="radio"/>&nbsp;EOM&nbsp;</td>
    </tr>
    <tr>
     <td>&nbsp;&nbsp;<input type="radio"/>&nbsp;Computer-Based&nbsp;</td>
    </tr>
</table>

  </div>
</div>






{this.state.show2?<Newclick2 t3={this.t3} t4={this.t4} t5={this.t5} t6={this.t6} t7={this.t7}/>:null}
{this.state.show1?<Newclick1/>:null}



















<div className="col-sm-2">
  <div className="new5">
  <table>

    <tr>
      <th colSpan="3">
      <td>
      <div className="header">Journals:&nbsp;&nbsp;<input type="checkbox" onClick={this.t1}/>&nbsp;General(only)&nbsp;&nbsp;<input type="checkbox" onClick={this.t2}/>&nbsp;Multiple</div>
      </td>
      </th>
    </tr>
    
</table>

  </div>
</div>


























</div>












);
}
}