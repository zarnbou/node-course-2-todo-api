const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js')

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('58e2eed8ee7cbd6b96f7dd94').then((todo) => {
    console.log(todo);
});

Todo.findOneAndRemove("_id: 58e2eed8ee7cbd6b96f7dd94").then((todo) => {
    console.log(todo);
});