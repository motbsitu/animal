const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});


app.listen(3000);
