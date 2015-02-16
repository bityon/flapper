var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(__dirname + 'client'));
// app.engine('jade', require('jade').__express);
// app.engine('html', require('ejs').renderFile);

// app.get('/', function (req, res) {
//     res.render('index.html');
// });

app.listen(3000);