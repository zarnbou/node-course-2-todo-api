const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // find one and update
    //  db.collection('Todos').findOneAndUpdate({
    //      _id: new ObjectID('58d35778034664996f4aa45b')
    //     }, {
    //        $set: {
    //            completed: true 
    //        }
    //     }, {
    //         returnNewDocument: false
    //     }).then((result) => {
    //         console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('58d35959034664996f4aa506')
    }, {
        $set: {
            location: 'St Johns Park'
        },
        $inc: {
            age: 1
        }
    }, {
        returnNewDocument: true
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});