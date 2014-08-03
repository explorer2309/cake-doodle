var Datastore = require('nedb');
//var db = new Datastore();
//var thunkify = require('thunkify');

var funkify = require('funkify');
var db = funkify(new Datastore());

exports.addDoodle = function* (data) {
	console.log(data);
	console.log(db.insert.toString());
	//console.log(thunkify(db.insert).toString());
	var ret = yield db.insert(data);
	console.log(ret);
	return ret;
};