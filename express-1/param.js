const express = require('express');
const crypto = require('crypto');

const app = express();
const port = process.argv[2];

app.put('/message/:id', (req, res) => {
    var id = req.params.id;

    var result = crypto
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex');

    res.end(result);
})
.on('error', (e) => {
    console.error(e);
})

app.listen(port);

/*
  Process PUT '/message/:id' requests and respond
  with the SHA1 hash of the current date
*/
