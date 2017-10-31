var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require('path');

var app = express();
app.use(cors());
app.options("*",cors());
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public/"));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/public/views/landingpage/index.html'));
});


app.use(methodOverride("_method"));

require("./controllers/user.js")(app);

db.sequelize.sync({force:true}).then(function(){
	app.listen(PORT, function(){
		console.log("App listening on PORT " + PORT);
	});
});