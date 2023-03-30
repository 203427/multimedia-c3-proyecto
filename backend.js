const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/corbatas', function(req, res) {
  res.sendFile(__dirname + '/public/corbatas.html');
});
app.get('/playeras', function(req, res) {
  res.sendFile(__dirname + '/public/playeras.html');
});
app.get('/cubrebocas', function(req, res) {
  res.sendFile(__dirname + '/public/cubrebocas.html');
});

app.listen(3000, function() {
  console.log('El servidor está escuchando en el puerto 3000.');
});
