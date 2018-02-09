
var Mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

//express
var express = require('express');
var router = express.Router();


// ..........................................................registration
router.post("/regi",function(request,response){

	console.log('reaching server');
    console.log(request.body);
    Mongo.connect(url, function(err,database){
        if(err) throw err;
        var db = database.db("sharath");
        var temp = request.body;
        db.collection("users").insertOne(temp,function(err,result){
            if(err) throw err;
            console.log("inserted");
			response.send(true);
			
			 
			
        });
    database.close();
    });
    // console.log("reaching");
});





//Validation for registration starts
router.post("/validations",function(request,response){
	console.log("Validations");
    
    Mongo.connect(url, function(err,database){
       
	    if(err) {  console.log(err); throw err;  }
		
		var db = database.db("sharath");
        var temp1 = request.body;
		var emailNew1 = request.body.email;
		console.log(emailNew1);
			db.collection("users").find({"email":emailNew1},{}).toArray(function(err, doc){
				if(err) throw err;
				response.send(doc);
				//console.log(email);
				console.log("in collection "+emailNew1);
				console.log("email exits "+ JSON.stringify(doc));
			});
			//console.log(email);
		
			
			 
			
        });
    //database.close();
    });
   
//Validation for registration ends 


//export this router to use in our server.js
module.exports = router;