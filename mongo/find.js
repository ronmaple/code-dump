const mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/learnyoumongo';
const queryArgs = parseInt(process.argv[2]);

mongo.connect(url, (err, db) => {
    if (err) {
       console.error(err);
    }

    var col = db.collection('parrots');

    var array = col.find({
        age: {
            $gt: queryArgs
        }
    }).toArray((err, documents) => {
        if (err) {
              console.error(err);
          }
          console.log(documents);
          db.close();
      })
});

/*
  Access mongodb (learnyoumongo) 'parrots' collection, and find()
  in collection an age greater than the number supplied as the 1st
  command line argument (process.argv[2]);
*/
