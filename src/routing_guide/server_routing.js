var express = require('express');
//instanciar
var app = express();


//ROUTING_PATH
app.get('/', function (req, res) {
  res.send('root')
})


app.get('/about', function (req, res) {
  res.send('about')
})

app.get('/random', function (req, res) {
  res.send('random.txt')
})

app.get('/ab?cd', function (req, res) {
  res.send('ab?cd')
})

app.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/')
})
//FIN ROUTING_PATH

//ROUTING_PARAM
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})
//FIN ROUTING_PARAM

app.get('/example/a', function (req, res) {
  res.send('Hello from A!')
})

app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
})

var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

var cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])

app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from D!')
})
//FIN ROUTING_HANDLERS

//escuchar
var server = app.listen(8083, function () {

  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})
