
var Mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

//express
var express = require('express');
var router = express.Router();


// add to cart ..............
router.post("/addtocart",function(request,response){
    //console.log(request.body);
    Mongo.connect(url, function(err,database){
        if(err) throw err;
        var db = database.db("sharath");
        var temp = request.body;
        db.collection("cart").insertOne(temp,function(err,result){
            if(err) throw err;
           // console.log("inserted to cart db");
			console.log("-------------");
			response.send(true);
			
			 
			
        });
    database.close();
    });
    
});

// ..........................................................my cart
router.post("/mycart",function(request,response){	
    Mongo.connect(url, function(err,database){
       if(err) {  console.log(err); throw err;  }
		 var x=request.body;
		 //console.log('am inside my cart server');
		// console.log('object coming is ',x);
	    var db = database.db("sharath");
	   db.collection('cart').find({"email":x.email}).toArray(function(err, docs){
            if(err) throw err;
			//console.log('my cart server',docs);
			response.send(docs);
		 });
    database.close();
    });
    // console.log("reaching");
});


// .........................................................default address setting cart 
router.post("/defaultCart1",function(request,response){
	console.log("reaching default cart",request.body.default1);
    
    Mongo.connect(url, function(err,database){
       
	    if(err) {  console.log(err); throw err;  }
	
		// console.log("db connected");
	    var db = database.db("sharath");
		 var myquery = request.body;
		console.log('dat cmg is',myquery.default1);
		console.log('dat cmg is..........................................................');
	
	 db.collection("cart").updateMany({email:'sharathau8@gmail.com'},{$set:{address:myquery.default1}},{multi:true}, function(err, obj) {
          if (err) throw err;
          response.send(true);
          console.log("1 document updated in cart");
          database.close();
        });
      });
    // console.log("reaching");
});
// ..........................................................delete a item in cart

router.post("/deleteitem",function(request,response){
    console.log("delete in server");
       Mongo.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("sharath");
         var myquery = request.body;
		console.log('dat cmg is',myquery.pid);
        dbo.collection("cart").deleteOne({pid:myquery.pid}, function(err, obj) {
          if (err) throw err;
          response.send(true);
          console.log("1 document deleted");
          db.close();
        });
      });
    // console.log("reaching");
});
 // ..........................................................

//export this router to use in our server.js
module.exports = router;
