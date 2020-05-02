
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";






 class Datepicker extends React.Component{
  constructor(props) {
    super(props);

   
   
    this.state = {
      
     
      startDate: new Date()

      
    };
    this.handlechange=this.handlechange.bind(this);
  }

  

  


handlechange(date){
  this.setState({
    startDate:date
    });
}
 
 
 
  







render()
 {



return (

        
              <div>
              <DatePicker onChange={this.handlechange} selected={this.state.startDate}/>
              </div>
     
)
}
}
export default Datepicker;
