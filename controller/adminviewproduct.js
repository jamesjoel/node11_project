var express = require('express');
var router = express.Router();
var product = require('../model/product');
var Mongodb = require('mongodb');

router.get("/", function(req, res){

	product.find(function(err, result){
		// console.log(result);
		var pagedata = { title : "View Category", pagename : "admin/view_product", data : result};
		res.render("admin_layout", pagedata);
	});


	
});

router.get("/delete", function(req, res){
	console.log(req.query);
	//res.send("delete");
	product.remove({ _id : Mongodb.ObjectId(req.query.id) }, function(err, result){
		console.log(result);
		res.redirect('/admin/view_product');
	});
});

// ObjectId()

module.exports=router;