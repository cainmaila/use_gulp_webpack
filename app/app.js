var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '..','www')));

app.listen(8000,function () {
	console.log("run 8000 port!!");
});
