var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	if(req.session.is_user_logged_in)
	{
		check = true;
	}
	else
	{
		check=false;
	}
	var pagedata = {title : "About Page", pagename : "about/index", check : check};
	res.render("layout", pagedata);
});
module.exports=router;