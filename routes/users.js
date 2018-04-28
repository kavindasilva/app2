var express = require('express');
var router = express.Router();

//require('../dbcon');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
	var con=require('../dbcon');

	//con.query("SELECT * FROM customers", function (err, result, fields) {
	con.query("SELECT * FROM stud", function (err, result, fields) {
    	if (err) throw err;
    	console.log(result);
	});

res.send('respond with a resource');
});


router.get('/ab', function(req, res, next) {
  
	var con=require('../dbcon');

	//con.query("SELECT * FROM customers", function (err, result, fields) {
	con.query("SELECT * FROM stud", function (err, result, fields) {
    	if (err) throw err;
    	console.log(result);

    	res.render('index', { title: 'Express', data1:result});
    	//res.render('index', { title: 'Express', data1:result });
	});

	/** index view
	router.get('/', function(req, res, next) {
  		res.render('index', { title: 'Express' });
	});
	*/

	//con.close();

	//res.send('base/users/ab');
	//res.render('index', { title: 'Express', data1:result });
});


module.exports = router;
