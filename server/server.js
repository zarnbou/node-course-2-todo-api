var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
})

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};



// var newTodo = new Todo({
//     text: 'Go to gym',
//     completed: false,
//     completedAt: 8
// });

// var otherTodo = new Todo({
//     text: '    Edit this video'
// });

// otherTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo', e);
// });

// var newUser = new User({
//     email: '   zarn.bou@gmail.com  '
// });

// newUser.save().then((doc) => {
//     console.log('Saved user', doc);
// }, (e) => {
//     console.log('Unable to save user', e);
// });