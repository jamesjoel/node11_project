var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('express-flash');
var cache = require("nocache");

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(__dirname+"/public"));
app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret : "TSS"}));
app.use(flash());
app.use(cache());


app.use(function(req, res, next){
	res.locals.session=req.session;
	next();
});

app.use(require("./controller/default"));

app.listen(process.env.PORT || 3000, function(){
	console.log("Server Running");
});