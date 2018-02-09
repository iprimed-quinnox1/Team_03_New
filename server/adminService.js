
var Mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

//express
var express = require('express');
var router = express.Router();

// ..........................................................admin
router.post("/admin",function(request,response){
    console.log(request.body);
    Mongo.connect(url, function(err,database){
        if(err) throw err;
        var db = database.db("sharath");
        var temp = request.body;
        db.collection("admin").insertOne(temp,function(err,result){
            if(err) throw err;
            console.log("inserted in admin db");
			response.send(true);
			
			 
			
        });
    database.close();
    });
    // console.log("reaching");
});



//export this router to use in our server.js
module.exports = router;
