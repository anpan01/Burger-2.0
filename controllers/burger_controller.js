var models  = require('../models');
var express = require('express');
var router  = express.Router();

var models = require('../models');

//displaying all burgers to the page, devoured and !devoured
router.get('/', function(req, res){
	models.Burgers.findAll()
	.then(function (availBurgs){
		var burgersToPage = {burger: availBurgs};
		return res.render('index', burgersToPage);
	})
});

//adding a new burgername
router.post('/insertOne', function (req, res) {
	var newBurg = req.body.burger_name;
	models.Burgers.create({
		burger_name: newBurg,
		devoured: false
	})
	.then(function(){
		return res.redirect('/');
	})
});

router.put('/updateOne/:id', function(req, res){
	var burgerId = req.params.id;
	models.Burgers.findOne({where: {id: burgerId}})
		.then(function(eatBurg){
			eatBurg.update({devoured: 1})
		})
		.then(function(){
			return res.redirect('/');
		})
});

//is row is updated, why can't i just redirect the page, and have the burger get placed on the devoured side? 
//not getting updated in the mysql database...

module.exports = router;


