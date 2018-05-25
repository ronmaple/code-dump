const fs = require('fs');

let filterFiles  = function(dir, ext, callback) {
    fs.readdir(dir, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            const results = data.filter((a) => {
                let listExt = a.split('.');
                return ext === listExt[1];
            });
            return callback(null, results);
        }

    });
}

module.exports = filterFiles;
