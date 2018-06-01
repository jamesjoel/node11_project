var connect = require('../config/connect');
module.exports.insert=function(obj, cb){


	connect.init(function(err, client){
		var db = client.db('project');
		db.collection('stu').insert(obj, cb)
	});
}

module.exports.find=function(cb){


	connect.init(function(err, client){
		var db = client.db('project');
		db.collection('stu').find().toArray(cb);
	});
}