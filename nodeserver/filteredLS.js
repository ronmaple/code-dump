/*
  return file names with a given extension
  argument on cmd line from a directory
*/

const fs = require('fs');

let filePath = process.argv[2];
let ext = process.argv[3];

if (ext[0] === '.') {
    let temp = ext.split('.');
    ext = temp[1];
}

let callback = (err, list) => {
    if (err) throw err;

    const results = list.filter((a) => {
        let listExt = a.split('.');
        return ext === listExt[1];
    });

    for (var i in results) {
        console.log(results[i]);
    }
};

fs.readdir(filePath, callback);
