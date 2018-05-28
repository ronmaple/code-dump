const mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/learnyoumongo';
const col = 'prices';
const _size = process.argv[2];

mongo.connect(url, (err, db) => {
    if (err) throw err;

    let prices = db.collection(col);
    let match = {
        $match: {
            size: _size
        }
    }
    let group = {
        $group: {
            _id: 'avg',
            price: {
                $avg: '$price'
            }
        }
    }

    prices.aggregate([match, group])
    .toArray( (err, res) => {
        if (err) throw err;
        let avgprice = res[0].price.toFixed(2);
        console.log(avgprice);
        db.close();
    })

})
