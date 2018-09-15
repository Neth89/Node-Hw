require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify);
var inquirer = require("inquirer");
var options1 = "";
var options2 = ""
inquirer.prompt([{
    type: "list",
    message: "choose: ",
    choices: ["concert", "movies", "spotify", "dothis"],
    name: "type1"
},
{
    type: "input",
    message: "Search:",
    name: "type2"
}
]).then(answers => {
    options1 = answers.type1;
    options2 = answers.type2;
    spotifyThis();
});

function spotifyThis() {
    var songName = options2;
    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(JSON.stringify(data));
    });

}