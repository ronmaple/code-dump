/*
  Collect http request data stream from multiple http calls, and console
  log the data in the http call order.
*/

const http = require('http');
const bl = require('bl'); // npm i bl *dependencies not on repo*

let urls = [];
let results = [];
let body = '';
let count = 0;

for (var i = 0; i < 3; i++) {
    http.get(process.argv[2+i], function(response) {
        response.pipe( bl( function(err, data) {
            if (err) throw err;

            data = data.toString();
            results.push(data);
            count++;

            if (count === 3) {
                for (var i in results) {
                    console.log(results[i]);
                }
            }

        } ) )
    })
}
