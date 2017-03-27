const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Zarn'}).then((result) => {
    //      console.log(result);
    // });

    // db.collection('Users').findOneAndDelete({_id: new ObjectID('58d89fa1152363f08b48646b')}).then((result) => {
    //      console.log(JSON.stringify(result, undefined, 2));
    // });

    db.collection('Todos').findOneAndDelete({_id: new ObjectID('58d89fa1152363f08b48646b')}).then((result) => {
         console.log(JSON.stringify(result, undefined, 2));
    });
    
    //db.close();
});