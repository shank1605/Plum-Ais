var express = require('express');
const app = express();
const fetch=require('node-fetch');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require("cors");
app.use(cors());

var Table = require("./models/schema");

var tableRouter = require("./routes/table");




app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url,function(err,db){
	if(err) 
		console.log(err);
	else
		console.log("Database created");
	


 app.post('/table1',(req,res)=>
{
let date=req.body.date;
let newdate=date.slice(0,10);
	var data = [{ date1:newdate,
	 descrption:req.body.description,
	 debit1:req.body.debit,
	 credit1:req.body.credit }];

	var data1 = [{ date2:newdate,
	 description1:req.body.description1,
	 debit1:req.body.debit1,
	 credit1:req.body.credit1 }];

    var data2 = [{ date3:newdate,
	 description2:req.body.description2,
	 debit2:req.body.debit2,
	 credit2:req.body.credit2	}];
	 console.log(data);
var dbo = db.db("mydb");
dbo.collection("cash").insertMany(data,function(err,res){
	if(err) throw err;
	}); 
dbo.collection("commonstock").insertMany(data1,function(err,res){
	if(err) throw err;
	}); 
dbo.collection("apic").insertMany(data2,function(err,res){
	if(err) throw err;
	}); 
}); 



app.post('/table2',(req,res)=>
{
let date1=req.body.date10;
let newdate1=date1.slice(0,10);



var data = [{ date2:newdate1,
	 descrption:req.body.description11,
	 debit2:req.body.debit12,
	 credit2:req.body.credit13 }];
var data4 = [{ date:newdate1,
	description:req.body.description14,
	 debit:req.body.debit15,
	 credit1:req.body.credit16 }];
var dbo = db.db("mydb");

dbo.collection("cash").insertMany(data,function(err,res){
	if(err) throw err;
	}); 
dbo.collection("treasurystock").insertMany(data4,function(err,res){
	if(err) throw err;
	}); 
}); 



app.post('/table3',(req,res)=>
{	
	let date2=req.body.date17;
let newdate2=date2.slice(0,10);



	var data = [{ date1:newdate2,
	 descrption:req.body.description18,
	 debit1:req.body.debit19,
	 credit3:req.body.credit20}];
var data4 = [{ date1:newdate2,
	description:req.body.description21,
	 debit:req.body.debit22,
	 credit2:req.body.credit23 }];
var dbo = db.db("mydb");
dbo.collection("cash").insertMany(data,function(err,res){
	if(err) throw err;
	}); 
dbo.collection("treasurystock").insertMany(data4,function(err,res){
	if(err) throw err;
	}); 
}); 





app.get('/datatable0',(req,res)=>{
	var dbo = db.db("mydb");


dbo.collection("treasurystock").find({}).toArray(function(err,result){
	if(err) throw(err);
	const treasury=result;
	
	res.send(treasury);

});


});




app.get('/datatable1',(req,res)=>{
	var dbo = db.db("mydb");

dbo.collection("cash").find({}).toArray(function(err,result){
	if(err) throw(err);
	const cash=result;
	
	res.send(cash);

});


});




app.get('/datatable2',(req,res)=>{
	var dbo = db.db("mydb");

dbo.collection("commonstock").find({}).toArray(function(err,result){
	if(err) throw(err);
	const commonstock=result;
	
	res.send(commonstock);

});


});




app.get('/datatable3',(req,res)=>{
	var dbo = db.db("mydb");

dbo.collection("apic").find({}).toArray(function(err,result){
	if(err) throw(err);
	const apic=result;
	
	res.send(apic);



});


});


app.get('/datatable2/bal2',(req,res)=>{
	var dbo = db.db("mydb");



dbo.collection("commonstock").find({"credit1":"20000"}).count(function(err,count){
	if(err) throw(err);
	var bal=count;
	
	var bal2=bal*20000;
	
	res.send(String(bal2));
	



});



});


	
var dbo = db.db("mydb");










app.get('/datatable1/bal1',(req,res)=>{
	var dbo = db.db("mydb");
	let debit1;
	let debit2;
	let debit3;

	let pro;
	let ary=[];
dbo.collection("cash").find({"debit1":"28000"}).count(function(err,count){
	if(err) throw(err);
	debit1=count*28000;
	dbo.collection("cash").find({"debit1":"2100"}).count(function(err,count1){
		if(err) throw(err);
		debit2=count1*2100;
		dbo.collection("cash").find({"debit2":"6800"}).count(function(err,count2){
			if(err) throw(err);
			debit3=count2*6800;
			
			var bal0=(debit1+debit2)-debit3;
		
			res.send(String(bal0));
		});
		
	});
	
});
});




app.get('/datatable1/bal0',(req,res)=>{
	var dbo = db.db("mydb");
	let deb1;
	let deb2;
	

	
dbo.collection("treasurystock").find({"credit1":"6800"}).count(function(err,count){
	if(err) throw(err);
	console.log(count);
	deb1=count*6800;
	dbo.collection("treasurystock").find({"credit2":"2100"}).count(function(err,count1){
		if(err) throw(err);
		console.log(count);
		deb2=count1*2100;

		var bal20=(deb1-deb2);
		console.log(bal20);
		res.send(String(bal20));
		
		
	});
	
});







});













app.get('/datatable3/bal3',(req,res)=>{
	var dbo = db.db("mydb");



dbo.collection("apic").find({"credit2":"8000"}).count(function(err,count){
	if(err) throw(err);
	const bal=count;
	
	
	var bal3=bal*8000;
	
	res.send(String(bal3));
});
});





app.post('/submitpost',(req,res)=>
{
let date=req.body.date100;
let newdate=date.slice(0,10);



	var data = [{ date1:newdate,
	 o2:req.body.o21,
	 vendor:req.body.vendor1,
	 vendorin:req.body.vendorin1 ,
	 g3:req.body.g31,
	 ref:req.body.ref11,g4:req.body.g41}];

	
	 console.log(data);
var dbo = db.db("mydb");
dbo.collection("ledgers").insertMany(data,function(err,res){
	if(err) throw err;
	}); 

}); 





app.get('/submitpost1',(req,res)=>{
	var dbo = db.db("mydb");

dbo.collection("ledgers").find({}).toArray(function(err,result){
	if(err) throw(err);
	const commonstock1=result;
	
	res.send(commonstock1);

});


});









});
















 

       
    








app.listen(8000,()=>{console.log("server is started")});
