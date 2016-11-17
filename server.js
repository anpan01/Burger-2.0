var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var router  = express.Router();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

//allows us to do more than POST/GET for action buttons on index.handlebars
app.use(methodOverride('_method'));

//use handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//
var routes = require('./controllers/burger_controller.js');
app.use('/', routes);



//========================================================
//creating the models and burgers

var models = require('./models');

var sequelizeConnection = models.sequelize;

//types of burgers(columns in my burgers table under burger2_db)
var hopdoddy;
var bigMac;
var tripCheese;

//i say drop them special foreign keys atm!
// sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')
// 	.then(function (){
// 		//creating the tables using .sync
// 		return sequelizeConnection.sync({forcec:true})
// 	})
// 	.then(function(){
// 		return models.Burgers.create(
// 		{
// 			burger_name: "hopdoddy",
// 			devoured: false
// 		})
// 	})
// 	.then(function(){
// 		return models.Burgers.create({
// 			burger_name: "bigMac",
// 			devoured: false
// 		})
// 	})
// 	.then(function (){
// 		return models.Burgers.create({
// 			burger_name: "tripCheese",
// 			devoured: false
// 		})
// 	});


app.listen(3000, function(){
	console.log("Listening on port 3000")
})