var express = require('express');
var path = require('path');
var app = express();

app.get('/',(req,res) => {
    console.log('Dir Name: ', path.join(__dirname + '/public'));
    res.sendFile(path.join(__dirname, '/views/index.html'));
})

app.use('/public',express.static('public'))
express.static(path.join(__dirname + '/public'));

module.exports = app;
