var express = require('express');
var router = express.Router();


/** custom function to output errors */
globeError = function(errdata, res0){
	console.log(errdata);
	res0.render('error', {message: errdata.code, error:errdata});
	return;
}; 

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

    	res.render('index', { title: 'Express-view data', data1:result});
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

router.post('/del', function(req, res, next) {
	var con=require('../dbcon');

	var id=req.body.Rid;

	var sql = "delete from stud where roll_no="+id+";";
	//var sql = "INSERT INTO stud VALUES ( 00,'node test data')";

	con.query(sql, function(err, result) {
		if (err) throw err;
		console.log("1 record deleted");
	});
/**/
	//res.send('delete window');
	res.render('ins1', { title: 'ks-delete', data2:id});
});

router.get('/ins', function(req, res, next) {
  
	var con=require('../dbcon');

	//var sql = "INSERT INTO stud (name, address) VALUES ('Company Inc', 'Highway 37')";
	var sql = "INSERT INTO studd VALUES ( 00,'node test data')";
  con.query(sql, function (err, result) {
    //if (err) throw err;
    /*if(err){
    	console.log(err);
    	res.render('error', {message: err.code, error:err});
    	//res.red
    }*/
    if(err) globeError(err, res); 
    else{
    	console.log("1 record inserted");
    	res.redirect('../index');
	}
  });

//res.send('insert window');
//res.redirect('../index');
});


module.exports = router;
