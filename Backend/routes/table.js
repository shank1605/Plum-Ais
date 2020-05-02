var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var Table = require("../models/schema");
var app = express();

app.post('/',(req,res)=>
{
	const date=req.body.date;
	const descrption=req.body.description;
	const debit=req.body.debit;
	const credit=req.body.credit;
	const description1=req.body.description1;
	const debit1=req.body.debit1;
	const credit1=req.body.credit1;
	const description2=req.body.description2;
	const debit2=req.body.debit2;
	const credit2=req.body.credit2;

	var newTable =  { date:date,description:description,debit:debit,credit:credit,description1:description1,debit1:debit1,
                     credit1:credit1,description2:description2,debit2:debit2,credit2:credit2 }
	                
    Table.createCollection("newTable",function(err,newlyCreated){
    	if(err){
    		console.log(err)
    	} else{
    		console.log("collection created");
    	}
    });
		
});


