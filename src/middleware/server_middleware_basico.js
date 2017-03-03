var express = require('express');
//instanciar
var app = express();


app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  res.send('Printando hora en la consola del server')
  next()
})

app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})


//escuchar
var server = app.listen(8084, function () {

  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)

})
