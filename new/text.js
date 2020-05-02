import React from 'react';
import '../table.css';
export default class Text1 extends React.Component {
constructor(props){
  super(props);
  this.state = {
    
};
}
render(){
return(

<div>


<div className="text">
		Brief explanation here.
		<br/>
		<p><div  className="p1">X(exercises)</div>- Here,User is in the kiddle pool(water about 6 inches deep).
			When User is fed a transaction narrative, his job is confined to selecting only the appropriate
			ledger menu item.Upon successful selection-- The grid will auto display the correct data value item.
			Yup.That's it.
		</p>
		<p><div  className="p1">
			G(games)</div>- Here,User is in the kiddle pool(water about 12-14 inches deep).
			When User is fed a transaction narrative, his job is slightly expanded to selecting
			the appropriate ledger menu item. Upon successful selection-- he must then kiosk the 
			appropriate cell in the journal grid.
		</p>
		<p><div  className="p1">
			Freestyle</div>- Here, User is empowerd to simply tinker at random.He is restrained,however-- to
			poke around inside the journal(of focus)-- meaning he can select from the GL items(relating to journal
			 -related accounts) which,however are limited. Upon selection
			 in the GL he must kiosk on corresponding cell in the Journal's cell.Likewise, he must kiosk on the sub-ledger cell.Finally, he must enter a data value.
		</p>
</div>



</div>
);
}
}