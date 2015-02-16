var http = require("http");
var express = require("express");
var path = require("path");
var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'client')));

//.use(express.static(__dirname + 'client'));

server.listen(3000); 