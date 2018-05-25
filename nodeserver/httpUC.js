/*
  Receive POST request, and convert to UpperCase, and send
*/

const http = require("http");
const map = require("through2-map"); // npm i through2-map

const port = process.argv[2];

let server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
        return res.end('send me a POST\n');
    }
    req.pipe(map( (data) => {
        return data.toString().toUpperCase();
    })).pipe(res);
})
.on('error', (e) => {
    throw e;
});

server.listen(port);
