var express = require('express');
var router = express.Router();
// var chache = require('chache');
router.use("/demo", require("./demo"));



router.use("/", require("./home"));
router.use("/login", require("./login"));
router.use("/signup", require("./signup"));
router.use("/about", require("./about"));
router.use("/user", backdoor, require("./user"));
router.use('/profile', backdoor, require('./profile'));

router.use("/logout", require("./logout"));

/* This is admin panel coading ------------*/
router.use('/admin', require('./adminlogin'))
router.use("/admin/dashboard", backdoor_admin, require("./admindash"))


// router.use("/user", chache, require("./"))

function backdoor(req, res, next)
{
	if(! req.session.is_user_logged_in)
	{
		res.redirect("/login");
	}
	next();
}
function backdoor_admin(req, res, next)
{
	if(! req.session.is_admin_logged_in)
	{
		res.redirect("/");
	}
	next();
}


module.exports=router;