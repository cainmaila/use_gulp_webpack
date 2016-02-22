var express = require('express');

var app = express();

app.use(express.static('www'));

app.listen(80,function () {
	console.log("run 80 port!!");
});