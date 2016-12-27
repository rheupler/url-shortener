const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'))
});

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
