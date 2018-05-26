const express = require('express');

const app = express();
const port = process.argv[2];

app.get('/home', (req, res) => {
  res.end('Hello World!');
});

app.listen(port);

/*
  Print hello world when navigating to /home.
  Localhost port provided as 2nd command line
  argument.
*/
