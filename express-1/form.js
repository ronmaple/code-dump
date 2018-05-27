const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const port = process.argv[2];

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', (req, res) => {
    var result = req.body.str.split('').reverse().join('');
    // let declarations gave a block-scoping error...
    res.end(result);
})
.on('error', (e) => {
    throw e;
});

app.listen(port);

/*
  Handle POST request from /form routing, and simply
  send back a reversed text input. Use body-parser middleware

*/
