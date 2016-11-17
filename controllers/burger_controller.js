var models  = require('../models');
var express = require('express');
var router  = express.Router();

var models = require('../models');

// router.get('/', function(req, res) {
//     res.render('index');
// });

router.get('/', function(req, res){
	models.Burgers.findAll()
	.then(function (availBurgs){
		var burgersToPage = {burger: availBurgs};
		return res.render('index', burgersToPage);
	})
});

router.post('/insertOne', function (req, res) {
	models.Burgers.

});

router.put('/updateOne/:id', function(req, response){
	var burgerId = req.params.id;
	models.Burgers.update({updatedAt:{id: burgerId}}, {where: {devoured: 1}})
	.then(function(devouredBurg){
		console.log('devouredBurg', devouredBurg);
		var devouredToPage = {burger: devouredBurg};
		return response.redirect('/');
	})
});



module.exports = router


