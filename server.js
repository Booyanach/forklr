var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    forklrApi = require('./modules/api-start.js'),
    fs=require('fs'),
    api = forklrApi(app, fs);


app.use(express.static(__dirname, '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/recipe/:id', function(req, resp) {
});

app.listen(8097);

console.log(api);

console.log('Express listening on port 80');