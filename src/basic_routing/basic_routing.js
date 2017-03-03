//nohup sudo -b node hello.js
//importar
var express = require('express');
//instanciar
var app = express();

// GET method route
app.get('/', function (req, res) {
  res.send('GET Respuesta al apartado basic_routing')
})

// POST method route
app.post('/', function (req, res) {
  res.send('POST Respuesta al apartado basic_routing')
})

//Respond to a PUT request to the /user route:
app.put('/', function (req, res) {
  res.send('Got a PUT  al apartado basic_routing')
})
//Respond to a DELETE request to the /user route:

app.delete('/', function (req, res) {
  res.send('Got a DELETE al apartado basic_routing')
})

//escuchar
var server = app.listen(8082, function () {

  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)

})
