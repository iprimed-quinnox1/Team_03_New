
var Mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

//express
var express = require('express');
var router = express.Router();

// ..........................................................
router.post("/finalorder",function(request,response){

	console.log("reaching finaloreder",request.body.email);
    
    Mongo.connect(url, function(err,database){
       
	    if(err) {  console.log(err); throw err;  }
		 var x = request.body;
		console.log('dat cmg is',x.email);
	
		//console.log("db connected");
	    var db = database.db("sharath");
		
		
		
	   db.collection("orders").find({"email":x.email}).toArray(function(err, docs){
            if(err) throw err;
            //console.log("fetched");
			console.log('data going',docs);	
			response.send(docs);
		 
			
        });
    database.close();
    });
    // console.log("reaching"); finalOrder
});
// final oreder adding from cart to order collection

router.post("/f2",function(request,response){
    console.log('dataaaaa',request.body);
    Mongo.connect(url, function(err,database){
        if(err) throw err;
        var db = database.db("sharath");
        var temp = request.body;
        db.collection("orders").insertOne(temp,function(err,result){
            if(err) throw err;
           // console.log("inserted to cart db");
			console.log("-------------");
			response.send(true);
			
			 
			
        });
    database.close();
    });
    
});

// ...................................Gift Wrapping starts

router.post("/giftWrap",function(request,response){
    console.log("Updating with giftWrap in server");
       Mongo.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("sharath");
         var myquery = request.body;
          console.log('dat cmg is',myquery.pid);
          console.log('dat cmg is',myquery.gift);
        dbo.collection("orders").updateOne({pid:myquery.pid},{$set:{"gift":myquery.gift}}, function(err, obj) {
          if (err) throw err;
          response.send(true);
          console.log("1 document set");
          db.close();
        });
      });
    // console.log("reaching");
});

 // ..........................................................

//export this router to use in our server.js
module.exports = router;
