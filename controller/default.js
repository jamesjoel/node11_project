var express = require('express');
var router = express.Router();

router.use("/", require("./home"));
router.use("/login", require("./login"));
router.use("/signup", require("./signup"));
router.use("/about", require("./about"));
router.use("/user", backdoor, require("./user"));
router.use('/profile', backdoor, require('./profile'));

router.use("/logout", require("./logout"));



function backdoor(req, res, next)
{
	if(! req.session.is_user_logged_in)
	{
		res.redirect("/login");
	}
	next();
}


module.exports=router;