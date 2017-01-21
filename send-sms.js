// Twilio Credentials 
var accountSid = 'AC17cca8267231c69720c934af29d34b23'; 
var authToken = 'd61ac565427e716f3eea24cd68e6290b'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: "+16085091272", 
    from: "+16089577582", 
    body: "This is the ship that made the Kessel Run in fourteen parsecs?", 
}, function(err, message) { 
    console.log(message.sid); 
});
