var express = require('express');
var path = require('path');
var app = express();
require('dotenv').config()
const MESSAGE_STYLE = process.env['MESSAGE_STYLE'];

app.use(function(req, res, next) {
  console.log(req.method,req.path,'-',req.ip);
  next();
})

app.get('/',(req,res) => {
    // console.log('Dir Name: ', path.join(__dirname + '/public'));
    res.sendFile(path.join(__dirname, '/views/index.html'));
})

app.get('/json',(req,res) => {
    var data = MESSAGE_STYLE == 'uppercase' ? {"message": "HELLO JSON"} : {"message": "Hello json"};
    res.json(data);
})

app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({time: req.time});
});

app.get('/:word/echo',(req,res) => {
    var data = {echo: req.params.word};
    res.json(data);
})

app.route('/name').get((req,res) => {
    var data = {name: req.query.first + ' ' + req.query.last};
    res.json(data);
})

app.use('/public',express.static('public'))
express.static(path.join(__dirname + '/public'));

module.exports = app;
