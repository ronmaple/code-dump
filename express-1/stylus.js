const express = require('express');
const stylus = require('stylus');

const app = express();
const port = process.argv[2];
const files = process.argv[3];

app.use(stylus.middleware(__dirname + files));
app.use(express.static(files));

app.listen(port);

/*
  Plug-in a style css to a file provided as a second argument
*/
