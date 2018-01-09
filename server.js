// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var mongo = require('mongodb').MongoClient;
var validURL = require('valid-url');
var id = require('shortid');


var dburl = process.env.DBPROGRAM + '://' + process.env.USER +':'+ process.env.PASS + '@ds249727.' + process.env.HOST + ':' + process.env.DBPORT + '/' + process.env.DBNAME;

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/new/:url', function(req, res){
  var url = req.params.url;
  if(validURL.isUri(url)){
    
    var entry = { "original" : url, 
                  "shortened url" : req.protocal+'://'+req.headers.host+'/new/'+id.generate()} 
  mongo.connect(dburl, function(err, db){
    if(err) throw err;
    
    var collection = db.collection(process.env.COLLECTION);
      collection.insert()
  });
  
  } else{
      console.log('Not a URI');    
  }
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
