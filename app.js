var express = require('express');
var app = express();

app.get('/robots.txt', function(req, res){
  res.send('# Fuck you Sir!');
});


var port = process.env.PORT || 5000
app.listen(port);
console.log('Listening on port' + port);