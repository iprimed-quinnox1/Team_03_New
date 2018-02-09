
var Mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

//express
var express = require('express');
var router = express.Router();

// ..........................................................login
router.post("/login",function(request,response){
	 // console.log(request.body);
    response.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    });
     Mongo.connect(url,function(err,database){
		 
         if(err) throw err;
		 console.log("db reaching");
         var db = database.db("sharath");
         var data = request.body;
         console.log("user email sent is",data.userName);
		 console.log("user pass sent is",data.pass);
		 
         var res1 = db.collection("users");
		 
	// db.demo.find({$and:[{"name":"chandu","pass":"12345"}]})
	// here we are mathing email not username do not get confused by name its
	// wrong ..but logic is working :)
         res1.find({$and : [{"email":data.userName,"pass":data.pass}]}).toArray(function(err,result){
             if(err) throw err;
			 
// console.log("bye",res2);
             if(result.length ==1){
				 console.log("bye*********************",result);
				 console.log("name issss",result.name);
				  console.log("email issss",result.email);
                 response.send(true);
             }
             else{
                 response.send(false);
             }
         });
         database.close();
     });
 
 });
 // ..........................................................

//export this router to use in our server.js
module.exports = router;
