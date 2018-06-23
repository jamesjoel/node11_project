var express = require('express');
var router = express.Router();
var Mongo = require('mongodb');
var product = require('../model/product');

router.get("/add/:id", function(req, res){
	

	var id = req.params.id;
	if(req.cookies.pid)
	{
		var oldid = req.cookies.pid;
		var newid = oldid+"#"+id;
		res.cookie('pid', newid, { expires: new Date(Date.now() + 900000), httpOnly: true });
	}
	else
	{
		res.cookie('pid', id, { expires: new Date(Date.now() + 900000), httpOnly: true });
	}
	var lasturl = req.header('Referer');
	
	res.redirect(lasturl);
});

router.get("/mycart", function(req, res){
	var carStr = req.cookies.pid; 
	// console.log(carStr);
	var arr = carStr.split("#");
	// console.log(arr);
	var newarr=[];
	arr.forEach(function(x){
		var obj = { _id : Mongo.ObjectId(x) };
		newarr.push(obj);
	});
	// console.log(newarr);
	product.findWhere({ $or : newarr}, function(err, result){
		console.log(result);
		var pagedata = {title : "Your Cart", pagename : "cart/index", data : result};
		res.render("layout", pagedata);
});
	
});


module.exports=router;