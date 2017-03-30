const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js')

// var id = '58dc7740fd74cd2104a6dfb122';

// if (!ObjectID.isValid(id))
// {
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// })

// Todo.findOne({
//      _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// })

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
    
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var userId = '58d9df50a1d02a4aa4a89eb7';

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('UserId not found');
    }

    console.log('User By Id', user);
}).catch((e) => console.log(e));