const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
	console.log(result);
});

Todo.findOneAndRemove({}).then((_id: '5aa0f1bbdec3023694fcbc7c') => {
	console.log(todo);
});

Todo.findByIdAndRemove('5aa0f1bbdec3023694fcbc7c').then((todo) => {
	console.log(todo);
});
