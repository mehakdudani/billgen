//all required modules
let express = require("express");
let ejs = require("ejs");
let http = require("http");

//creating application
let index = express();

//assign port number
let port = 2500 | process.env.port;

//set view engine
index.set('view engin', 'ejs');

//routes
index.use("/pics", express.static(__dirname + "/pics"));
index.use('/', require("./routes/mainpagesroutes"));

//start server
http.createServer(index).listen(port, () => {
    console.log("my port number is " + port);
});