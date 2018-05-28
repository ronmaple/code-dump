const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/learnyoumongo';

const firstName = process.argv[2];
const lastName = process.argv[3];

const fl = {
    firstName: firstName,
    lastName: lastName
}

MongoClient.connect(url, (err, db) => {
   if (err) throw err;

   var docs = db.collection('docs');

   docs.insert(fl, (err, data) => {
       if (err) throw err;
       console.log(JSON.stringify(fl));
       db.close();
   })

});
