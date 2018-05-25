/*
  Return file names with a given file extension argument from a
  directory --- but with a module based solution. Module file will contain
  a function that accepts 3 arguments: file path, extension, and callback
  function. File calling modular function will provide the given arguments,
  with the callback for error handling, and console log
*/

const fs = require('fs');
const mod = require('./mod.js');

let filePath = process.argv[2];
let ext = process.argv[3];

let filterDirectory = (err, list) => {
    if (err) {
        console.log(err);
    }

    else {
        for (var i in list) {
            console.log(list[i]);
        }
    }
}


mod(filePath, ext, filterDirectory);
