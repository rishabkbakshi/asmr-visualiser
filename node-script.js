var tone = require('tonegenerator')
var express = require('express')
var app = express();

// const writeJsonFile = require('write-json-file');
 
// (async () => {
//     await writeJsonFile('audio.json', {foo: true});
// })();

app.use(express.static('.'))
var server = app.listen(8080, function(){
    // var port = server.address().port;
    var port = 8080;
    console.log("Server started at http://localhost:%s", port);
});

// New Interface! More options!!
// var tonedata = tone({
//   freq: 1000,
//   lengthInSecs: 2.0,
//   volume: 1080,
//   rate: 44100,
//   shape: 'sine'
// })

// // The old interface, still available for compatibility
// // var tonedata = tone(frequency, lengthInSeconds, volume = 30, rate = 44100)
// console.log(tonedata);
// console.log("Generating tone data");

// var twoDimArr = [];

// tonedata.forEach( (value, index) => {
// 	twoDimArr.push({x: value, y: tonedata[tonedata.length - index - 1]})
// })

// console.log(twoDimArr);