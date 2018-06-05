var express = require('express');
var router = express.Router();
var category = require("../model/category");


router.get("/", function(req, res){
	var pagedata = {title : "Add Category", pagename : "admin/add_category", message : req.flash('msg')};
	res.render("admin_layout", pagedata);
});
router.post("/", function(req, res){
	// console.log(req.body);
	category.insert(req.body, function(err, result){
		req.flash("msg", "Successful added");
		res.redirect("/admin/add_category");
	});

});

module.exports=router;