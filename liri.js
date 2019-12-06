require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var something = require("dotenv").config();
var bandsintown = require('bandsintown')("liri");
var moment = require("moment");
// moment().format("DD/MM/YYYY"); <-- used when logging entries to the 
// var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

// Variable for query entered by the user
var userOption = process.argv[2];
var userSubject = process.argv.slice(3).join(" ");

switch(userOption) {
     case "concert-this": // Bands in Town API
         var url = "https://rest.bandsintown.com/artists/";
         var key = "/events?app_id=codingbootcamp";
         var queryURL = url + userSubject + key;
        
    //     // Run the axios.get function...
    //     // The axios.get function takes in a URL and returns a promise (just like $.ajax)
         axios.get(queryURL).then
             (function(events) {
                 console.log(JSON.stringify(events.data, null, 2));
             },
             function(error) {
                 if (error) {
                     console.log(error);
                 }
             });