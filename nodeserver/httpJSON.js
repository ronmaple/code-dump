/*
  to avoid missing challenge details, it's copy&pasted
  on the bottom of this file.
*/

const http = require('http');
const url = require('url');
const port = process.argv[2];

const parsedTime = (time) => {

    let t = new Date(time);

    return {
        hour: t.getHours(),
        minute: t.getMinutes(),
        second: t.getSeconds()
    }
}

const unixTime = (time) => {
    let t = new Date(time);

    return {
        unixtime: t.getTime()
    }
}

const server = http.createServer( (req,res) => {
    if (req.method !== 'GET') {
        return res.end('send me a GET\n');
    }

    let result;

    let parsedURL = url.parse(req.url, true);
    let time = parsedURL.query.iso;
    console.log(time);

    if (/^\/api\/parsetime/.test(parsedURL.path)) {
        result = parsedTime(time);
    } else if (/^\/api\/unixtime/.test(parsedURL.path)) {
        result = unixTime(time);
    }

    console.log(result);

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        result = JSON.stringify(result);
        res.end(result);
    } else {
        res.writeHead(404);
        res.end();
    }
})
.on('error', (err) => {
    throw err;
});

server.listen(port);

/*
  from learnyounode challenge #13:

  Write an HTTP server that serves JSON data when it receives a GET request
  to the path '/api/parsetime'. Expect the request to contain a query string
  with a key 'iso' and an ISO-format time as the value.

  For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

  The JSON response should contain only 'hour', 'minute' and 'second'
  properties. For example:

     {
       "hour": 14,
       "minute": 23,
       "second": 15
     }

  Add second endpoint for the path '/api/unixtime' which accepts the same
  query string but returns UNIX epoch time in milliseconds (the number of
  milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
  For example:

     { "unixtime": 1376136615474 }

  Your server should listen on the port provided by the first argument to
  your program.


*/
