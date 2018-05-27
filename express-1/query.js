const express = require('express');

const app = express();
const port = process.argv[2];

app.get('/search', (req, res) => {
    var query = req.query;
    res.send(query);
})
.on('error', (err) => {
    console.error(err);
})

app.listen(port);

/*
  Obtain the query input on '/search' routing and
  send back JSON object of its parameters
*/
