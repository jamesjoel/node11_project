var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
	
	res.render("val/index");
});

router.post("/", function(req, res){
	console.log(req.body);
});

module.exports=router;