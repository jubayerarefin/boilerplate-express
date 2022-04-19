var express = require('express');
var path = require('path');
var app = express();

app.get('/',(req,res) => {
    console.log('Dir Name: ', path.join(__dirname, '/views/index.html'));
    res.sendFile(path.join(__dirname, '/views/index.html'));
})

module.exports = app;
