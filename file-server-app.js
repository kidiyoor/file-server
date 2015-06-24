var path = require('path');
var mime = require('mime');
var fs = require('fs');
var http = require('http');
var express = require('express');



var app = express();

app.get('/', function (req, res) {
  res.send('WeLcOmE tO fIlE-sErVeR !');
});

app.get('/sample', function (req, res) {
  var file = __dirname + '/store/sample.txt';

  var filename = path.basename(file);
  var mimetype = mime.lookup(file);

  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  res.setHeader('Content-type', mimetype);

  var filestream = fs.createReadStream(file);
  filestream.pipe(res);
});

