var express = require('express');
var router = express.Router();
var product = require('../model/product');

router.get("/", function(req, res){

	product.find(function(err, result){
		console.log(result);
		var pagedata = { title : "View Category", pagename : "admin/view_product", data : result};
		res.render("admin_layout", pagedata);
	});


	
});



module.exports=router;