var http = require('http');

http.createServer(function(req, res) {

  var indice = req.url.indexOf('=');
  var parametro = req.url.substr(indice+1);
  res.end(parametro);

}).listen(3000, function() {
  console.log('OI');
});
