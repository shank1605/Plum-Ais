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
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';
import FileExplorerTheme from 'react-sortable-tree-theme-full-node-drag';
import Part20 from './new/part20';
import Part21 from './new/part21';
import Part22 from './new/part22';
import Partsel2 from './new/partsel2';
import Partsel1 from './new/partsel1';
import axios from 'axios';
import {Modal, ModalHeader, Button,ModalBody,ModalFooter} from 'reactstrap';
import './checked.png';




export default class New1 extends React.Component {
constructor(props){
  super(props);
  this.state = {

    show1:false,
    show2:false
    ,show3:false,
    alpha:'',show4:false,four:false,next1:false,next21:false,next31:false,next41:false,gl11:true,g10:true
    ,showtable:false,sys:false,sys1:false,menu:false,coa:false,gl:false,gl1:false,gl2:false,gl3:false,select1:false,select2:false,
    select0:false,startDate: new Date(),ref1:'P1',o2:'',vendor:'',vendorin:'',g3:'80',g2:'',g1:'',g41:'80',s1:false,ledgers:[]
    ,modal: false,i:false

     
};
this.t1=this.t1.bind(this);
this.t2=this.t2.bind(this);
this.t21=this.t21.bind(this);
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
this.system=this.system.bind(this);
this.system1=this.system1.bind(this);
this.menu1=this.menu1.bind(this);
this.coa=this.coa.bind(this);
this.gl=this.gl.bind(this);
this.show1=this.show1.bind(this);
this.show2=this.show2.bind(this);
this.show3=this.show3.bind(this);
this.sel1=this.sel1.bind(this);
this.sel2=this.sel2.bind(this);
this.handlechange=this.handlechange.bind(this);
this.click1=this.click1.bind(this);
this.click2=this.click2.bind(this);
this.click3=this.click3.bind(this);
this.click4=this.click4.bind(this);
this.click5=this.click5.bind(this);
this.click6=this.click6.bind(this);
this.click7=this.click7.bind(this);
this.click8=this.click8.bind(this);
this.click9=this.click9.bind(this);
this.click10=this.click10.bind(this);
this.click11=this.click11.bind(this);
this.submitpost=this.submitpost.bind(this);
this.toggle = this.toggle.bind(this);
this.onchange1=this.onchange1.bind(this);
this.onchange2=this.onchange2.bind(this);


}



toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
     

    fetch("http://localhost:8000/submitpost1")
        .then(res => res.json())
        .then(res => this.setState({ledgers: res }));



  }




system(){
  this.setState({sys:true});
}

system1(){
  this.setState({sys1:true,select0:true});
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
t21(){
  this.setState({
    show2:false,
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

menu1(){
  this.setState({menu:true});
}

coa(){
  this.setState({coa:true,gl:false});

}
gl(){
  this.setState({coa:false,gl:true});

}
show1(){
  this.setState({gl3:false,gl2:false,gl1:true,});
}
show2(){
  this.setState({gl3:false,gl1:false,gl2:true,});

}
show3(){
  this.setState({gl1:false,gl2:false,gl3:true,});

}

sel1(){
  this.setState({select1:true,select2:false,coa:false,gl:false,select0:false});

}

sel2(){
  this.setState({select1:false,select2:true,coa:false,gl:false,select0:false});

}

handlechange(date){

  this.setState({
    startDate:date
    });
}

onchange1(e){
  this.setState({
    g3:e.target.value
    });

}
onchange2(e){
  this.setState({
    g41:e.target.value
    });

}

click1(){
  this.setState({
    ref1:this.state.ref1,
    o2:'201.10',vendor:'Austin County',vendorin:'A-50',g3:this.state.g3,s1:true, im:false,show2:false,g41:this.state.g41
    

  });
}

click3(){
  this.setState({
    ref1:this.state.ref1,
    o2:'201.04',vendor:'Fishy Back',vendorin:'F-50',g3:this.state.g3,g1:'80',im:false,s1:true,show2:false,g41:this.state.g41
    
});
}


click2(){
  this.setState({
    ref1:this.state.ref1,
    o2:'201.06',vendor:'Digital Services',vendorin:'D-50',g3:this.state.g3,g3:'80',im:false,s1:true,show2:false,g41:this.state.g41
   
});
}

click4(){
  this.setState({
    ref1:this.state.ref1,
    o2:'201.10',vendor:'Handy Andy',vendorin:'H-50',g3:this.state.g3,g1:'80',im:false,s1:true,show2:false,g41:this.state.g41
});
}

click5(){
  this.setState({
    ref1:this.state.ref1,
    o2:'201.01',vendor:'Mason',vendorin:'M-50',g3:this.state.g3,im:false,s1:true,show2:false,g41:this.state.g41
});
}

click6(){
  this.setState({
    ref1:this.state.ref1,
    o2:'201.05',vendor:'Piggy Back',vendorin:'P-50',g3:this.state.g3,im:false,s1:true,show2:false,g41:this.state.g41
});
}

click7(){
  this.setState({
    ref1:this.state.ref1,
    o2:'201.02',vendor:'Rudd',vendorin:'R-50',g3:this.state.g3,im:false,s1:true,show2:false,g41:this.state.g41
});
}

click8(){
  this.setState({
    ref1:this.state.ref1,
    o2:'201.08',vendor:'Sharky & Sharky',vendorin:'P-50',g3:this.state.g3,im:false,s1:true,show2:false,g41:this.state.g41
});
}

click9(){
  this.setState({
    ref1:this.state.ref1,
    o2:'201.07',vendor:'Sheild Protection',vendorin:'P-50',g3:this.state.g3,im:false,s1:true,show2:false,g41:this.state.g41
});
}

click10(){
  this.setState({
    ref1:this.state.ref1,
    o2:'201.03',vendor:'Skrill',vendorin:'S-50',g3:this.state.g3,im:false,s1:true,show2:false,g41:this.state.g41
});
}

click11(){
  this.setState({
    ref1:this.state.ref1,
    o2:'201.11',vendor:'Zip-zap Electric',vendorin:'P-50',g3:this.state.g3,im:false,s1:true,show2:false,g41:this.state.g41
});
}

submitpost(){


  let ref2=parseInt(this.state.ref1.slice(1,2))+1;
let ref3='P'+ref2;
console.log(ref3);


  this.setState({
      im:true,
      ref1:ref3
     });

alert('Your data has been posted');

const data30={
  ref11:this.state.ref1,
  date100:this.state.startDate,
  o21:this.state.o2,
  vendor1:this.state.vendor,
  vendorin1:this.state.vendorin,
  g31:this.state.g3,
  g41:this.state.g41
 
};

axios.post('http://localhost:8000/submitpost',data30,{header:{
  'Content-Type':'application/json',}}

)
.then(res=>{
  console.log(res);
  console.log(res.data);
})


this.setState({
      g3:80,
      g41:80
     });



}
componentDidUpdate(){
  fetch("http://localhost:8000/submitpost1")
        .then(res => res.json())
        .then(res => this.setState({ledgers: res }));

}








render(){
return(
<div>

<div>
        
        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} size="xl">
          <ModalHeader toggle={this.toggle}>Purchases Journal EOM</ModalHeader>
          <ModalBody>
          <div className="maintablenew100">
    <table>
      <thead className="">
        <tr>
          <td>Ref</td>
          <td>Date</td>
          <td>#</td>
          <td>Posted</td>
          <td>Vendor</td>
          <td>Vendor Invoice No.</td>
          <td>G/L 305.00</td>
          
          <td>G/L 201.00</td>
          
          
          
        </tr>
      </thead>
      {this.state.ledgers.map((r2)=>(
        <tr >
          <td>{r2.ref}</td>
          <td>{r2.date1}</td>
          <td>{r2.o2}</td>
          <td><img src="checked.png"/></td>
          <td>{r2.vendor}</td>
          <td>{r2.vendorin}</td>
          <td>{r2.g3}</td>
          <td>{r2.g4}</td>
        </tr>
        ))}
        </table>

    
    
    
  </div>
           
          </ModalBody>
          <ModalFooter>
            
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
</div>


{this.state.select0?
  <div>
<div className="bm">
    <div className="col-sm-1 offset-1" id="toggler20">
      <a className="buttonm" onClick={this.sel1}>Menu</a>
    </div>
    </div>

    <div className="bm5">
    <div className="col-sm-2 offset-1" >
      <a className="buttonm" onClick={this.sel2}>Sub{''}Ledger</a>
    </div>
    </div>
    </div>
    :null}


    

{this.state.select1?
<div>
<div className="bm6">
    <div className="col-sm-1 offset-1" id="toggler20">
      <a className="buttonm" onClick={this.menu1}>Menu</a>
    </div>
    </div>



   <UncontrolledCollapse toggler="#toggler20">
    <div>
    <div className="bm1">
    <div className="col-sm-1 offset-1">
      <a className="button12" onClick={this.coa} >COA</a>
    </div>
    </div>

    <div className="bm2">
    <div className="col-sm-1 offset-1">
      <a className="button13" onClick={this.gl}>G/L</a>
    </div>
    </div>
    </div>
    </UncontrolledCollapse>
    



    {this.state.coa?
    <div className="col-sm-2">
<div className="maintable10">

<table className="chart1">
<tr className="header">
<th colSpan="3" >
<div className="header">Chart of Accounts</div>
</th>
</tr>
<tr id="cash5">
<th  style={{backgroundColor:this.state.bg1}}>
Assets
</th>
<th onClick={this.props.hide1}>
Liab.
</th>
<th  style={{backgroundColor:this.state.bg}}>
O.Equity
</th>
</tr>
</table>
</div>
</div>
:null}


{this.state.gl?
    <div className="col-sm-2">
<div className="maintable10">
<table className="chart1">
<tr className="header">
<th colSpan="3" >
<div className="header">Table of contents</div>
</th>
</tr>
<tr id="cash5">
<th  style={{backgroundColor:this.state.bg1}} onClick={this.show1}>
Assets
</th>
<th onClick={this.show2}>
Liab.
</th>
<th  style={{backgroundColor:this.state.bg}} onClick={this.show3}>
O.Equity
</th>
</tr>
</table>
</div>
<div className="panel">
    {this.state.gl1 ? <Part21 />:null}
    {this.state.gl2 ? <Part22 />:null}
    {this.state.gl3 ? <Part20 />:null}
  </div>
  </div>

:null}
</div>

:null}


{this.state.select2?
  <div>
<div className="bm7">
    <div className="col-sm-2 offset-1"  id="toggler21">
      <a className="buttonm" onClick={this.menu1}>Sub{''}Ledger</a>
    </div>
    </div>



    <UncontrolledCollapse toggler="#toggler21">
    <div>
    <div className="bm1">
    <div className="col-sm-1 offset-1">
      <a className="button12" onClick={this.coa} >A/R</a>
    </div>
    </div>

    <div className="bm2">
    <div className="col-sm-1 offset-1">
      <a className="button13" onClick={this.gl}>A/P</a>
    </div>
    </div>
    </div>
    </UncontrolledCollapse>
    



 {this.state.coa?
    <div className="col-sm-2">
<div className="maintable10">
<table className="chart1">
<tr className="header">
<th colSpan="3" >
<div className="header">Table of contents</div>
</th>
</tr>


</table>
<div className="panel1">
     <Partsel1 />
   
   
  </div>
</div>

  </div>
:null}


{this.state.gl?
    <div className="col-sm-2">
<div className="maintable10">
<table className="chart1">
<tr className="header">
<th colSpan="3" >
<div className="header">Table of contents</div>
</th>
</tr>


</table>
<div className="panel1">
    
     <Partsel2 click1={this.click1} click2={this.click2} click3={this.click3} click4={this.click4} click5={this.click5}
     click6={this.click6} click7={this.click7} click8={this.click8} click9={this.click9} click10={this.click10}
     click11={this.click11}/>
   
  </div>
</div>

  </div>
:null}


</div>
    :null}
   










{this.state.show4?<Newtable startDate={this.state.startDate} handlechange={this.handlechange} 
ref1={this.state.ref1} onchange1={this.onchange1} ledgers={this.state.ledgers} onchange2={this.onchange2} im={this.state.im} submitpost={this.submitpost} toggle={this.toggle} vendor={this.state.vendor} vendorin={this.state.vendorin} g3={this.state.g3} g41={this.state.g41} o2={this.state.o2}/>:null}


{this.state.s1?
  <div className="transmain">
<div className="trans" >
<h4>Transactions</h4>
</div>
<div>
<div className="trans1">


Galactic Gadgets <b>purchased</b> from <b>{this.state.vendor}</b> 10 units of Mobile @ $8 per unit, extending to <b>$80</b> and (vendor invoice {this.state.vendorin} ). 
</div>
</div>
</div>
:null}







<div className="mainb">

<div className="b1">
    <div className="col-sm-1 offset-1">
      <a className="button11" onClick={this.system}>System</a>
    </div>
    </div>

    
    {this.state.sys?
      <div>
    <div className="b2">
    <div className="col-sm-1 offset-1">
      <a className="button12"onClick={this.system1} >Manual</a>
    </div>
    </div>

    <div className="b3">
    <div className="col-sm-1 offset-1">
      <a className="button13">CBased</a>
    </div>
    </div>
    </div>
    :null}


    

    {this.state.sys1?
      <div>
    <div className="b4">
    <div className="col-sm-1 offset-1">
      <a className="button11">Journal</a>
    </div>
    </div>

   
    <div className="b5">
    <div className="col-sm-1 offset-1">
      <a className="button12" onClick={this.t2} >Show</a>
    </div>
    </div>

    <div className="b6">
    <div className="col-sm-1 offset-1">
      <a className="button13" onClick={this.t21}>Hide</a>
    </div>
    </div>
       </div>
    
    :null}
    </div>


    





    






{this.state.show2?<Newclick2 t3={this.t3} t4={this.t4} t5={this.t5} t6={this.t6} t7={this.t7}/>:null}
{this.state.show1?<Newclick1/>:null}
</div>












);
}
}