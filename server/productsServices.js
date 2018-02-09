
var Mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

//express
var express = require('express');
var router = express.Router();


// ..........................................................displaycat1 products
router.post("/displaycat1",function(request,response){	
    Mongo.connect(url, function(err,database){
       if(err) {  console.log(err); throw err;  }
		 var x=request.body.name;
		  console.log('object coming is ',x);
	    var db = database.db("sharath");
	   db.collection('category1').find({"ptype":x}).toArray(function(err, docs){
            if(err) throw err;
			response.send(docs);
		 });
    database.close();
    });
    // console.log("reaching");
});



// ..........................................................Display product
// deatails
router.post("/PD",function(request,response){	
console.log('reaching cart server');

    Mongo.connect(url, function(err,database){
       if(err) {  console.log(err); throw err;  }
	   var x=request.body.pid;
		// var x=request.body.name;
		  // console.log('object coming is ',x);
	    var db = database.db("sharath");
	   db.collection('category1').find({"pid":x}).toArray(function(err, docs1){
            if(err) throw err;
			// console.log('reaching cart db display');
			// console.log('reaching cart server',docs1);
			response.send(docs1);
		 });
    database.close();
    });
    // console.log("reaching");
});

//export this router to use in our server.js
module.exports = router;
