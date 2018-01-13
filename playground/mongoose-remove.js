const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove
// Todo.findOneAndRemove({_id : '5a5a71d240c15f1d955a1a8a'}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('5a5a71d240c15f1d955a1a8a').then((todo) => {
  console.log(todo);
});
