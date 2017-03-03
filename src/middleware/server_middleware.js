var express = require('express');
//instanciar
var app = express();


app.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id)
  next()
}, function (req, res, next) {
  res.send('User Info')
})

// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', function (req, res, next) {
  res.end(req.params.id)
})

app.use('/ip', function (req, res) {
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log('Tu dirección ip es, ' + ip);
        res.write('<h1>Tu dirección ip es, ' + ip + '</h1>');
})

//escuchar
var server = app.listen(8084, function () {

  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)

})
