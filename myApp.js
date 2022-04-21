var express = require('express');
var path = require('path');
var app = express();
require('dotenv').config()
// const mySecret = process.env['MESSAGE_STYLE'];
app.get('/',(req,res) => {
    console.log('Dir Name: ', path.join(__dirname + '/public'));
    res.sendFile(path.join(__dirname, '/views/index.html'));
})

app.get('/json',(req,res) => {
    var data = process.env.MESSAGE_STYLE == 'uppercase' ? {"message": "HELLO JSON"}:{"message": "Hello json"};
    res.json(data);
})

app.use('/public',express.static('public'))
express.static(path.join(__dirname + '/public'));

module.exports = app;
