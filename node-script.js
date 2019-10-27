var tone = require('tonegenerator')
var express = require('express')
var app = express();
const path = require('path');
const fs = require('fs');
const ndjson = require('ndjson'); 

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

app.get('/streamAudio', (req, res) => {
let readStream = fs.createReadStream(__dirname + '\\json\\sound_data.ndjson');

//setup headers
res.writeHead(200, {'Content-Type': 'application/ndjson'}); 

readStream.on('open', () => {
	console.log("Response: ", res., res.x, res.y);

    // readStream.pipe(JSON.parse(res)); //pipe stream to response object
  });
});

// app.get('/', (req, res) => {
//   let readStream = fs.createReadStream(__dirname + '/sound_data.ndjson').pipe(ndjson.parse());
  
//   const chunks = [];
//   readStream.on('data', (data) => {
//     chunks.push(JSON.stringify(data));
//   });

//   readStream.on('end', () => {
//     var id = setInterval(() => {
//       if (chunks.length) {
//         res.write(chunks.shift() + '\n');
//       } else {
//         clearInterval(id);
//         res.end();
//       }
//     }, 500);
//   });
// });



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