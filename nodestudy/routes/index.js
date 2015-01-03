var express = require('express');
var router = express.Router();

var mysql = require('mysql');

/* DB Connection pool create */
var pool =  mysql.createPool({
	connectionLimit : 1000,
	waitForConnections:false,
	host            : 'localhost',
	user            : 'root',
	password        : 'dreamhnt',
	database        : 'nodestudy'
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.post('/register', function(req, res) {
	var id = req.body.id;
	var name = req.body.name;
	var email = req.body.email;
	var pwd = req.body.pwd;

	pool.getConnection(function(err, conn) {
		if(err) console.error('err', err);

		conn.query('insert into register(id, name, email, pwd) values (?,?,?,?)',[id,name,email,pwd], function(err, result) {
			if(err) {
				console.error('err',err);
				conn.release();
			}
			console.log('result', result);
			if(result.affectedRows == 1) {
				res.json({status:'success'});
			} else {
				res.json({status:'fail'});
			}
			conn.realease;
		});
	});
});

router.get('/result', function(req, res) {
	pool.getConnection(function(err, conn) {
		if(err) console.error('err', err);

		conn.query('select * from register', [], function(err, results) {
			if(err) {
				console.error('err',err);
				conn.release();
			}
			console.log(results);
			res.render('result', {results:results});

		});
	});
});

module.exports = router;