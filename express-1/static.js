const express = require('express');
const path = require('path');

const app = express();
const port = process.argv[2];
const indexHTML = process.argv[3];

app.use(express.static(indexHTML || path.join(__dirname, 'public')));

app.listen(port);

/*
  Serve an index.html file (provided as 2nd command line argument)
  using the static middleware by express
*/
