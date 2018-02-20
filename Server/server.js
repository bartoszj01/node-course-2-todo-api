var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// var Todo = mongoose.model('Todo', {
// 	text: {
// 		type: String,
// 		required: true,
// 		minlength: 1
// 		trim: true
// 	},
// 	completed: {
// 		type: Boolean,
// 		default: false
// 	},
// 	completedAt: {
// 		type: Number,
// 		default: null
// 	}
// });

// var newTodo = new Todo({
// 	text: 'Cook dinner'
// });

// 	var newTodo = new Todo({
// 		text: 'walk the dog',
// 		completed: true,
// 		completedAt: 23
// 	});

// newTodo.save().then((doc) => {console.log('Saved todo', doc);}, (e) => {console.log('Unable to save todo')});

var User =  mongoose.model('User', {
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	}
});

var newUser = new User({
	email: 'ba030118@gmail.com'
});

newUser.save().then(
	(doc) => {console.log(JSON.stringify(doc, undefined, 2));}, 
	(e) => {console.log('Unable to save', e);
});