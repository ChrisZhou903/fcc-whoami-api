var express = require('express')
var path = require('path')
var app = express()
var port = process.env.PORT || 8080

app.get('/', function (req, res) {
  var obj = {
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  }
  
  try {
    res.json(obj);
  } catch (err) {
    res.send(500);
  }
  
})

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})