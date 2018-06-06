var express = require('express');
var router = express.Router();
var product = require("../model/product");
var category = require("../model/category");

router.get("/", function(req, res){
	category.find(function(err, result){
		var pagedata = {title : "Add Product", pagename : "admin/add_product", message : req.flash("msg"), catedata : result};
	res.render("admin_layout", pagedata);
	});
	
});
router.post("/", function(req, res){
	// console.log(req.body);
	product.insert(req.body, function(err, result){
		// console.log(result);
		req.flash("msg", "Product Add Successfuly");
		res.redirect("/admin/add_product");
	});
});

module.exports=router;