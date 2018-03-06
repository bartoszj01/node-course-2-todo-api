const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a9cf9b94c71d8400e2ff4a411';

// if(!Object.isValid) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todo', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

var id = '5a8a88880c36fb3c28eb184f';
var email = 'ba030118@gmail.com';

User.findById(id).then((user) => {
	if(!user) {
		return console.log('User not found');
	}
	console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));

User.find({
	_id: id
}).then((users) => {
	console.log('Users', users);
});

User.findOne({
	email: email
}).then((user) => {
	console.log('User', user);
});