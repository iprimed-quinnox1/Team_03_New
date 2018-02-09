
var Mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

//express
var express = require('express');
var router = express.Router();

// ..........................................................address 

	 // console.log(request.body);
router.post("/myadd",function(request,response){
	console.log("reaching my add");
	console.log("reaching mycart",request.body.email);
    
    Mongo.connect(url, function(err,database){
       
	    if(err) {  console.log(err); throw err;  }
		 var myquery1 = request.body;
		//console.log('dat cmg is',myquery1.email);
	
		//console.log("db connected");
	    var db = database.db("sharath");
		
		
		
	   db.collection('users').find({email:myquery1.email}).toArray(function(err, docs){
            if(err) throw err;
            //console.log("fetched");
			//console.log(docs.deafault);	
			response.send(docs);
		 
			
        });
    database.close();
    });
    // console.log("reaching");
});

// .........................................................default address setting ********************
router.post("/default",function(request,response){
	console.log("reaching default",request.body.default1);
    
    Mongo.connect(url, function(err,database){
       
	    if(err) {  console.log(err); throw err;  }
	
		// console.log("db connected");
	    var db = database.db("sharath");
		 var myquery = request.body;
		//console.log('dat cmg is',myquery.default1);
	
	 db.collection("users").updateOne({email:'sharathau8@gmail.com'},{$set:{deafault:myquery.default1}}, function(err, obj) {
          if (err) throw err;
          response.send(true);
          console.log("1 document updated");
          database.close();
        });
      });
    // console.log("reaching");
});
// .........................................................default address setting cart ********************
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
// ..........................................................delete address


router.post("/deleteadd",function(request,response){
    console.log("delete address in server");
       Mongo.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("sharath");
         var myquery = request.body;
		console.log('dat cmg is',myquery.pid);
        dbo.collection("users").deleteOne({email:myquery.pid}, function(err, obj) {
          if (err) throw err;
          response.send(true);
          console.log("1 document deleted");
          db.close();
        });
      });
    // console.log("reaching");
});
// orders update in orders dropdown ..............
router.post("/oredersUpdate",function(request,response){
    console.log("oneeeeeeeeeeeeeeeeeeeeeeeeeeeee",request.body);
    Mongo.connect(url, function(err,database){
        if(err) throw err;
        var db = database.db("sharath");
        var temp = request.body;
         db.collection("cart").updateOne({pid:temp.pid}, {$set: {address: temp.address}}, function(err, obj) {
          if (err) throw err;
            console.log("updated to orders db");
			console.log("-------------");
			response.send(true);
	        });
	    database.close();
    });
    
});

// orders update in orders  one time..............
router.post("/oredersUpdateOne",function(request,response){
    console.log("oneeeeeeeeeeeeeeeeeeeeeeeeeeeee",request.body);
    Mongo.connect(url, function(err,database){
        if(err) throw err;
        var db = database.db("sharath");
        var temp = request.body;
         db.collection("cart").updateOne({pid:temp.pid}, {$set: {address: temp.address}}, function(err, obj) {
          if (err) throw err;
            console.log("updated to orders db");
			console.log("-------------");
			response.send(true);
	        });
	    database.close();
    });
    
});
// orders update in orders permanent..............
router.post("/oredersUpdatePer",function(request,response){
    console.log("ppppppppppppppppppppppppppppppppppppp",request.body);
    Mongo.connect(url, function(err,database){
        if(err) throw err;
        var db = database.db("sharath");
        var temp = request.body;
         db.collection("cart").updateOne({pid:temp.pid}, {$set: {address: temp.address}}, function(err, obj) {
          if (err) throw err;
            console.log("updated to orders db");
			console.log("-------------");
		
	        });
		var db1 = database.db("sharath");
	db1.collection("users").insertOne(temp,function(err,result){
            if(err) throw err;
            console.log("inserted in users**************************************************");
			response.send(true);
			
			 
			
        });
			
			
			
	    database.close();
    });
    
});




 // ..........................................................

//export this router to use in our server.js
module.exports = router;
