var http = require('http');
var express = require('express');
var twilio = require('twilio')("AC17cca8267231c69720c934af29d34b23", "d61ac565427e716f3eea24cd68e6290b");
var bodyParser = require('body-parser');
var wolfram = require("./modules/wolfram.js");

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.post('/msg', function(req, res) {
    var twilio = require('twilio');
    var twiml = new twilio.TwimlResponse();

    console.log("Number: " + req.body.From + "\nMessage: " + req.body.Body);
    
    wolfram.wolfram(res, req.body.Body, twiml);
});

http.createServer(app).listen(8080, function () {
  console.log("Express server listening on port 8080");
});
