var mysql = require('mysql');
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "ks",
  password: "1",
  database: "k1"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  //return con;
});
module.exports=con;
//return con;