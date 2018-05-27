const express = require('express');
const path = require('path');

const app = express();
const port = process.argv[2];
const indexJADE = process.argv[3];

app.set('view engine', 'jade');
app.set('views', indexJADE);


app.get('/home', (req, res) => {
    res.render('index', {
        date: new Date().toDateString()
    });
})

app.listen(port);
