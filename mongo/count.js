const mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/learnyoumongo';
const col = 'parrots';
const _age = parseInt(process.argv[2]);

mongo.connect(url, (err, db) => {
    if (err) throw err;

    let parrots = db.collection(col);
    parrots.count({
        age: {
            $gt: _age
        }
    }, (err, count) => {
        if (err) throw err;
        console.log(count);
        db.close();
    })
})
