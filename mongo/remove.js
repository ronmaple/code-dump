const mongo = require('mongodb').MongoClient;

const dbname = process.argv[2];
const collection = process.argv[3];
const _id = process.argv[4];
const url = 'mongodb://localhost:27017/' + dbname;

mongo.connect(url, (err, db) => {
    if (err) throw err;

    var col = db.collection(collection);
    col.remove({
        _id: _id
    }, (err) => {
        if (err) throw err;
        db.close();
    })


})
