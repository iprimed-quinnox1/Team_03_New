var express = require("express");
var Mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
var path = require('path');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// console.log(__dirname);
app.use(express.static('./client/view'));
app.use(express.static('./client'));
app.use(express.static('node_modules'));
//------------------------------------------------------------------------------------
// Linking to loginServices.js
var login = require('./server/loginServices.js');
app.use('/', login);

//Linking to registrationServices.js
var registration = require('./server/registrationServices.js');
app.use('/', registration);
//Linking to address.js
var address=require('./server/address.js');
app.use('/', address);
//Linking to cartServices.js
var cart=require('./server/cart/cartServices.js');
app.use('/', cart);
//linking to finalOrder.js
var finalOrder=require('./server/finalOrder.js');
app.use('/', finalOrder);
//linking to productsServices.js
var products=require('./server/productsServices.js');
app.use('/', products);
//linking to adminService.js
var admin=require('./server/adminService.js');
app.use('/', admin);







// ..................................................
app.listen(3000,function(){
    console.log("server running  @3000....");
});
