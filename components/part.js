import React from 'react';
import Table from '../table';
import Table1 from '../table1';
import Part0 from './part0';
import Part01 from './part01';
import Part10 from './part6';
import'../table.css';
import Part3 from './part3';
import Submit1 from '../components/submit1';
import { Button, Confirm } from 'semantic-ui-react';
import Table21 from '../table21';
import Table22 from '../table22';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Submit3 from './submit3';




export default class Part extends React.Component {
constructor(props){
  super(props);
  this.state = {
  	show:false,
  	show1:false,
  	show2:true,
  	show3:false,
  	submit:false,
  	ref:'',
  	date:[],
  	description:'',
  	gla:'',
  	dateshow:false,
  	 

  description1:'',
  credit:[],
  credit11:[],
  gla1:'',gla2:'',credit12:[],
  d1:'',
  d2:'',
  d3:'',
  d4:'',
  d5:'',
  d6:'',
  part03:false, 
  part04:false,
   part05:false,
   open: false,
   rad2:false
,show10:false,rad3:false,dateshow1:false,dateshow2:false,radio2:false,radio3:false,show11:'true', startDate: new Date()
,cash:[],ltable1:'',commonstock:[],apic:[],treasury:[],bal3:'',bal2:'',bal1:'',bal10:'',part:false
};
    this.part=this.part.bind(this);
    this.part2=this.part2.bind(this);
    this.part1=this.part1.bind(this);
    this.part3=this.part3.bind(this);
    this.part5=this.part5.bind(this);
    this.part6=this.part6.bind(this);
    this.hide=this.hide.bind(this);
    this.details1=this.details1.bind(this);
    this.details2=this.details2.bind(this);
    this.details3=this.details3.bind(this);
    this.submit=this.submit.bind(this);
    this.radio2=this.radio2.bind(this);
    this.radio3=this.radio3.bind(this);
    this.handlechange=this.handlechange.bind(this);
    this.submit1=this.submit1.bind(this);
    this.submit2=this.submit2.bind(this);
    this.handlechange=this.handlechange.bind(this);
    this.callApi=this.callApi.bind(this);
    this.change1=this.change1.bind(this);
    this.part8=this.part8.bind(this);
    this.mydiv=React.createRef()
    }
part(e){
	this.setState({
		show:true
});
}
part1(e){
this.setState({
dateshow:true,
gl:'#101',
ref:'R1',
exp:'10,000 shares of $20 par value common stock were authorized, of which 1,000 shares were issued @ $28 per share.'
});
}
handlechange(date){
this.setState({
startDate:date
});
}
part2(e){
this.setState({
show1:!this.state.show1,
show2:false
});
}
part3(){
this.setState({
description:'Cash',
gla:'#101',
part03:true
	});
}
part5(){
this.setState({
description1:'Common Stock',
gla1:'xxxx',
part04:true
	});
}
part6(){
this.setState({
description2:'APIC-Common Stock',
gla2:'xxxx1',
show3:true,
part05:true
	});
}
reset(){
this.setState({
show:false,
show1:false,
show2:true,
show3:false,
submit:false,
ref:'',
date:[],
description:'',
gla:'',
dateshow:false,
description1:'',
credit:[],
credit11:[],
gla1:'',gla2:'',credit12:[],
d1:'',
d2:'',
d3:'',
d4:'',
d5:'',
d6:'',
part03:false, 
part04:false,
part05:false,
open: false,
rad2:false,show10:false,rad3:false,dateshow1:false,dateshow2:false,radio2:false,radio3:false,show11:'true'
});
}
hide(){
this.setState({
show2:false
})
}
details1(){
this.setState({
d1:'10,000 Shares were issued @ $28 per share = $28,000',
d4:'28000'
		
	});
}

details2(){
	this.setState({
		
		d2:'$20 par value common stock 1,000 shares = 20,000',
		
		
		d5:'20000'
		
	});
}

details3(){
	this.setState({
		
		d3:'Cash Common stock = $28,000 - $20,000 = $8000',
		
		d6:'8000'
	});
}



submit(){
this.setState({
submit:true

});
this.setState({ open: true ,
});

alert('Your data has been posted');
const data1={
	date:this.state.startDate,
	description:this.state.description,
	debit:this.state.d4,
	credit:'',
	description1:this.state.description1,
	debit1:'',
	credit1:this.state.d5,
	description2:this.state.description2,
	debit2:'',
	credit2:this.state.d6
};

axios.post('http://localhost:8000/table1',data1,{header:{
	'Content-Type':'application/json',}}

)
.then(res=>{
	console.log(res);
	console.log(res.data);
})

}

submit1(){
this.setState({
submit:true

});
this.setState({ open: true ,radio2:true
});
alert('Your data has been posted');



const data2={
	date10:this.state.startDate,
	description11:'Cash',
	debit12:'6800',
	credit13:'',
	description14:'Treasury stock',
	debit15:'',
	credit16:'6800'
	
};

axios.post('http://localhost:8000/table2',data2,{header:{
	'Content-Type':'application/json',}}

)
.then(res=>{
	console.log(res);
	console.log(res.data);
})


}

submit2(){
this.setState({
submit:true,
radio3:true

});
this.setState({ open: true ,
});
alert('Your data has been posted');

const data3={
	date17:this.state.startDate,
	description18:'Cash',
	debit19:'2100',
	credit20:'',
	description21:'Treasury stock',
	debit22:'',
	credit23:'2100',
};

axios.post('http://localhost:8000/table3',data3,{header:{
	'Content-Type':'application/json',}}

)
.then(res=>{
	console.log(res);
	console.log(res.data);
})


}




radio2(){
	this.setState({
		rad2:true,
		show:false,
		show3:false,
		show10:true,
		rad3:false,
		
		
		ref1:'R2',
		dateshow1:true,
		gla:'#101.00',
		description:'Cash',
		d4:'6800',
		gla1:'#102.00',
		description1:'Treasury Stock',
		d5:'6800',
		d1:'200 shares were re-acquired @ $34 per shares = $6,800',
		d2:'200 shares were re-acquired @ $34 per shares = $6,800',
		d3:'',
		exp:'Jan. 10, 2019 of the 1,000 shares of common stock previously issued @ $28 per share, 200 shares were re-acquired @ $34 per share. Management policy is to record acquisition of treasury at cost (as opposed to par) '
		,
	})


}

radio3(){
	this.setState({
		rad2:false,
		show:false,
		show3:false,
		show10:true,
		rad3:true,
		
		ref1:'R3',
		dateshow2:true,
		gla:'#101.00',
		description:'Cash',
		d4:'2100',
		gla1:'#305.00',
		description1:'Treasury Stock',
		d5:'2100',
		d1:'50 shares were re-acquired @ $42 per shares = $2,100',
		d2:'50 shares were re-acquired @ $42 per shares = $2,100',
		d3:'',
		exp:'Jan. 28, 2019 -- 50 ( 0f the 200 ) shares of treasury stock (costing $35 per share ) were re-issued @42 per share.  '
		,
	})


}
handlechange(date){
	
	
  this.setState({
    startDate:date

    });
}

change1(){


	this.setState({
		
		ltable1:true,
		part:false
	})


	if(this.mydiv.current){
		this.mydiv.current.scrollIntoView({
			behaviour:"smooth",
			block:"nearest"
		})
	}
	this.callApi();
	
	}







callApi(){
				fetch("http://localhost:8000/datatable1")
        .then(res => res.json())
        .then(res => this.setState({cash: res }));
        

        fetch("http://localhost:8000/datatable2")
        .then(res => res.json())
        .then(res => this.setState({commonstock: res }));

        fetch("http://localhost:8000/datatable3")
        .then(res => res.json())
        .then(res => this.setState({apic: res }));
        

         fetch("http://localhost:8000/datatable3/bal3")
        .then(res => res.json())
        .then(res => this.setState({bal3: res }));
      

        fetch("http://localhost:8000/datatable2/bal2")
        .then(res => res.json())
        .then(res => this.setState({bal2: res }));
        
        fetch("http://localhost:8000/datatable1/bal1")
        .then(res => res.json())
        .then(res => this.setState({bal1: res }));
       
         

         fetch("http://localhost:8000/datatable0")
        .then(res => res.json())
        .then(res => this.setState({treasury: res }));
       
       fetch("http://localhost:8000/datatable1/bal0")
        .then(res => res.json())
        .then(res => this.setState({bal10: res }));

      


        var bal0=parseInt(this.state.ba11)+parseInt(this.state.ba12)+parseInt(this.state.ba13)
        console.log(bal0);
        this.setState({
        	bal14: bal0
        });




			}


part8(){
  this.setState({
    
    part:true
  })

}



				
		








    render()
    {

    	
    	return(


<div>

	<div classname="main">
		<div className="col-sm-1 offset-1 mt-3">
			<a href="/" className="button3" onClick={this.reset}>Reset</a>
		</div>


		<div className="row">
			<div className="">
			{this.state.show10 ? <Part10 d1={this.state.d1} d2={this.state.d2} d3={this.state.d3} />:null}
				{this.state.show3 ? <Part01 d1={this.state.d1} d2={this.state.d2} d3={this.state.d3} details00={this.details1} details01={this.details2} details02={this.details3}/>:null}
				</div>
			<div className="col-sm-2 mt-3">

					{this.state.show1 ? <Table1 part3={this.part3} part5={this.part5} part6={this.part6} hide1={this.hide}/>:null}
			</div>


					<div className="col-sm-10 mt-3">
					{this.state.rad2 ? <Table21 ref1={this.state.ref} des={this.state.exp} date={this.state.dateshow1} 
							gla={this.state.gla} desc={this.state.description} desc1={this.state.description1}
							gla1={this.state.gla1}  
							gla={this.state.gla} d4={this.state.d4} d5={this.state.d5}  
							 submit={this.submit1} startDate={this.state.startDate} handlechange={this.handlechange} open={this.state.open}/>:null}

							 {this.state.rad3 ? <Table22 ref1={this.state.ref} des={this.state.exp} date={this.state.dateshow2} 
							gla={this.state.gla} desc={this.state.description} desc1={this.state.description1}
							gla1={this.state.gla1}  
							gla={this.state.gla} d4={this.state.d4} d5={this.state.d5}  
							 submit={this.submit2} startDate={this.state.startDate} handlechange={this.handlechange} open={this.state.open}/>:null}




							{this.state.show ? <Table ref1={this.state.ref} des={this.state.exp} date={this.state.dateshow} 
						gla={this.state.gla} desc={this.state.description} desc1={this.state.description1}
							desc2={this.state.description2}  gla1={this.state.gla1} gla2={this.state.gla2} 
						credit3={this.state.credit} credit5={this.state.credit12} credit4={this.state.credit11}  
				 		gla={this.state.gla} d4={this.state.d4} d5={this.state.d5} d6={this.state.d6} part03={this.state.part03}
				 		part04={this.state.part04} startDate={this.state.startDate} handlechange={this.handlechange} part05={this.state.part05} submit={this.submit} open={this.state.open} close={this.close} close1={this.close1}/>:null}

				 				
							


					</div>
					</div>





<div className="row">
<div classNaame="col-lg-10">

{this.state.show2 ? <Part0 part={this.part} part1={this.part1} part2={this.part2}  />:null}
</div>
</div>


<div>
{this.state.submit ? <Submit1 radio10={this.change1} part9={this.state.part} part7={this.part8} radio={this.radio2} radio1={this.radio3}  radio2={this.state.radio2} radio3={this.state.radio3}/>:null}
</div>
<div ref={this.mydiv}>
{this.state.ltable1 ? <Submit3 cash={this.state.cash}  bal1={this.state.bal1} bal10={this.state.bal10} bal14={this.state.bal14} bal11={this.state.bal11} bal12={this.state.bal12}treasury={this.state.treasury}  bal3={this.state.bal3} bal1={this.state.bal1} bal2={this.state.bal2} commonstock={this.state.commonstock} apic={this.state.apic}/>:null}
</div>



</div>





</div>







    );
    }
}