var express = require('express');
var router = express.Router();
var user = require("../model/user");
var mongo = require("mongodb");
router.get('/', function(req, res){


	var pagedata = {title : "Signup Page", pagename : "user/update"};
	res.render("layout", pagedata);
});
router.post("/", function(req, res){
	console.log(req.body);
	var obj = { _id : mongo.ObjectId(req.session.userid)};
	delete req.body._id;
	user.findWhereUpdate(obj, req.body, function(err, result){
		res.send(result);
	});
});

router.get('/getData', function(req, res){
	var obj = { _id : mongo.ObjectId(req.session.userid)};
	user.findWhere(obj, function(err, result){
		console.log(result);
		res.send(result[0]);
	});
});


module.exports=router;