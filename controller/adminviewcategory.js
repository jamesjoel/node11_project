var express = require('express');
var router = express.Router();
var category = require('../model/category');

router.get("/", function(req, res){

	category.find(function(err, result){
		console.log(result);
		var pagedata = { title : "View Category", pagename : "admin/view_category", data : result};
		res.render("admin_layout", pagedata);
	});


	
});



module.exports=router;