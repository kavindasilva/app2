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

router.get('/ins', function(req, res, next) {
  
	var con=require('../dbcon');

	//var sql = "INSERT INTO stud (name, address) VALUES ('Company Inc', 'Highway 37')";
	var sql = "INSERT INTO stud VALUES ( 00,'node test data')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

res.send('insert window');
});


module.exports = router;
