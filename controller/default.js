var express = require('express');
var router = express.Router();

router.use("/", require("./home"));
router.use("/login", require("./login"));
router.use("/signup", require("./signup"));
router.use("/user", function(req, res, next){
	if(! req.session.is_user_logged_in)
	{
		res.redirect("/login");
	}
	next();
}, require("./user"));


// function check(req, res)
// {
// 	if(! req.session.is_user_logged_in)
// 	{
// 		res.redirect("/login");
// 	}
// 	return;
// }


module.exports=router;