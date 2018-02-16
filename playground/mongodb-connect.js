//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/Users', (err, db)=> {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	//insert new doc into Users(name, age, location)

	// db.collection('Users').insertOne({
	// 	name: 'Bartosz',
	// 	age: 36,
	// 	location: 'Berlin'
	// },  (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	//deleteMany
	// db.collection('Users').deleteMany({name: 'Bartosz'}).then((result) => {
	// 	console.log(result);
	// });
	// db.collection('Users').findOneAndDelete({ _id: new ObjectID('5a781627966a8e2038b51ee4')}).then((result) => {
	// 	//console.log(result);
	// 	console.log(JSON.stringify(result, undefined, 2));
	// });

	//findOneAndDelete

	//update
	db.collection('Users').findOneAndUpdate(
		{_id: new ObjectID('5a868d98c3fb680bc8895cfb')},
		{$set: {name: 'Veronika'}, $inc: {age: 1}},
		{returnOriginal: false}).then((result) => {
			console.log(result)});

	// db.close();
});