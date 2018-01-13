var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectID} = require('mongodb');

var app = express();
const port = process.env.PORT || 3000;

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
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});


// Get /todos/123443243
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  // Validate id using is valid
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
    // 404 -send back empty send

  // findById
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.status(200).send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
    // Success
    // if todo -send it back
    // if no todo -send back 404 with empty body
    //error
      // 400 - send empty body back
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};

//
// // var newTodo = new Todo({
// //   text: 'Cook dinner',
// // });
// //
// // newTodo.save().then((doc) => {
// //   console.log('Saved todo', doc);
// // }, (e) => {
// //   console.log('Unable to save todo');
// // });
// //
// // var myTodo = new Todo({
// //   text: true
// // });
// //
// // myTodo.save().then((doc) => {
// //   console.log('Saved my todo', doc);
// // }, (e) => {
// //   console.log('Unable to save my todo', e);
// // });
//
// // User
//
//
// var myUser = new User({
//   email: 'murrayge@mnstate.edu'
// });
//
// myUser.save().then((doc) => {
//   console.log('User saved', doc);
// }, (e) => {
//   console.log('Unable to save', err);
// });
