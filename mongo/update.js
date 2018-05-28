// const mongo = require('mongodb').MongoClient;

// const url = `mongodb://localhost:27017/learnyoumongo` + process.argv[2];

// mongo.connect(url, function(err, db) {
//     if (err) throw err;

// 	var users = db.collection('users');
// 	users.updateOne({
// 	    username: 'tinaTime'
// 	}, {
// 	    $set: {
// 	        age: 40
// 	    }
// 	}, (err) => {
// 	    if (err) throw err;
// 	})

// 	db.close();
// })

var mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/" + process.argv[2];
mongo.connect(url, function(err, db) {
    if (err) throw err;
    docs =  db.collection('users')
    tina = {
          username: "tinatime"
        }
    docs.find(tina).toArray(function(err, data) {
            if (err) throw err;
            console.log(data);
            docs.update(tina, { $set: {age: 40 }}, function(err) {
                    if (err) throw err;
                    docs.find(tina).toArray( function(err, data) {
                            if (err) throw err;
                            db.close()
                            console.log(data);
                        })
                })
    })
})
