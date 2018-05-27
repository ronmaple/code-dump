// my solution:

const express = require('express');
const fs = require('fs');

const app = express();
const port = process.argv[2];
const file = process.argv[3];

var content;

fs.readFile(file, (err, data) => {
    if (err) throw err;

    content = JSON.parse(data);
});

app.get('/books', (req, res) => {
    res.send(content);
})
.on('error', (err) => {
    console.error(err);
})

app.listen(port);

/*
  Express server that reads a file given with 2nd command
  line argument as file path, read the file, and output
  the file to '/book' route in JSON format.

  ** Showing the suggested solution as I noticed my initial
  solution had scoping problems with 'let' on content variable.
*/

/*
var express = require('express')
var app = express()
var fs = require('fs')

app.get('/books', function(req, res){
  var filename = process.argv[3]
  fs.readFile(filename, function(e, data) {
    if (e) return res.send(500)
    try {
      books = JSON.parse(data)
    } catch (e) {
      res.send(500)
    }
    res.json(books)
  })
})

app.listen(process.argv[2])
*/
