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


var models = require('./models');

var sequelizeConnection = models.sequelize;

sequelizeConnection.sync();


app.listen(3000, function(){
	console.log("Listening on port 3000")
})