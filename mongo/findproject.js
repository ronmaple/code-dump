const mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/learnyoumongo';
const age = parseInt(process.argv[2]);

mongo.connect(url, (err, db) => {
    if (err) throw err;

    var parrots = db.collection('parrots');
    parrots.find({
        age: {
            $gt: age
        }
    }, {
        name: 1,
        age: 1,
        _id: 0
    }).toArray( (err, docs) => {
        if (err) throw err;

        console.log(docs);
        db.close();
    });
})

/*
  Similar to find.js but only display the name and age fields.
*/
