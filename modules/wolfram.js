var request = require('request');
var base = "http://api.wolframalpha.com/v1/simple?appid=";
base  = base + encodeURIComponent("E55H6Y-XXRJK5W79Y");

module.exports = {};

module.exports.wolfram = function (res, query, twiml) {
    if (query.trim() != "") {

        var url = base + "&i=" +  encodeURIComponent(query);
        console.log(url);

        var unintelligible = false;
        request (url, function(error, response, body) {
            if (error) {
                console.log(error);
                unintelligible = true;
            } else {
                // console.log(response.statusCode);
                if (response.statusCode == 501) {
                    // console.log("Flipped unintelligible");
                    unintelligible = true;
                }
            }

            if (unintelligible == false) {
                // console.log ("Intelligible");
                twiml.message(function () {
                    this.media(url);
                });
            } else {
                // console.log("unintelligible");
                twiml.message("Could not make head or tail our of that query!");
            }

            res.writeHead(200, {'Content-Type': 'text/xml'});
            res.end(twiml.toString());
        });

        

    } else {
        twiml.message("Invalid Query");
        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString());
    }
};