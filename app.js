var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.get("/", function(req, res) {
  res.render("index");
});

var port = process.env.PORT || 8080;
app.listen(port);
console.log("Messages app running on port 8080.");
