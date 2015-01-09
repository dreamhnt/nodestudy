var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bcrypt = require('bcrypt');
var passport = require('passport')
  ,LocalStrategy = require('passport-local').Strategy
  ,FacebookStrategy = require('passport-facebook').Strategy;


/* DB Connection pool create */
var pool =  mysql.createPool({
	connectionLimit : 1000,
	waitForConnections:false,
	host            : 'localhost',
	user            : 'root',
	password        : 'dreamhnt',
	database        : 'nodestudy'
});



// serialize
// 인증후 사용자 정보를 세션에 저장
passport.serializeUser(function(user, done) {
  console.log('serialize',user);
  done(null, user);
});


// deserialize
// 인증후, 사용자 정보를 세션에서 읽어서 request.user에 저장
passport.deserializeUser(function(user, done) {
  //findById(id, function (err, user) {
  console.log('deserialize');
  done(null, user);
  //});
});

passport.use(new LocalStrategy({
  usernameField:'id',
  passwordField:'pwd',
  passReqToCallback:true
}
, function(req, id, pwd, done){

  }
));

passport.use(new FacebookStrategy({
    clientID: '640584852733578',
    clientSecret: '9bbc390216d73d8d7aed09261deaff2a',
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    done(null,profile);
  }
));

router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/login_success',
    failureRedirect: '/login_fail' }));
router.get('/login_success', ensureAuthenticated, function(req, res){
  res.send(req.user);
});
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});
function ensureAuthenticated(req, res, next) {
  // 로그인이 되어 있으면, 다음 파이프라인으로 진행
  if (req.isAuthenticated()) { return next(); }
  // 로그인이 안되어 있으면, login 페이지로 진행
  res.redirect('/');
}

/* index page */
router.get('/', function(req, res) {
  pool.getConnection(function(err, conn){
    if(err) console.error('err',err);

    conn.query('select * from MOVIE', [], function(err, results){
      if(err) {
        console.error('err', err);
      }
      res.render('index', {results:results});
    });
    conn.release();
  });
});
/* 로그인 */
router.post('/login', function(req, res){
  var id = req.body.id;
  var pwd = req.body.pwd;

  pool.getConnection(function(err, conn) {
    if(err) console.error('err', err);

    conn.query('select salt,pwd from MEMBER where id=?',[id], function(err, result){
      if(err) console.error('err', err);
      var dbsalt = result[0].salt;
      var dbpwd = result[0].pwd;
      pwd = bcrypt.hashSync(pwd, dbsalt);
      if(pwd == dbpwd){
        res.redirect('back');
      } else {
        res.send('<script>alert("비밀번호를 확인해주세요");location.href="/";</script>');
      }
    });
    conn.release;
  });
});
/* 회원가입 */
router.post('/register', function(req, res) {
	var id = req.body.id;
	var name = req.body.name;
	var pwd = req.body.pwd;
  var salt = bcrypt.genSaltSync(12);
  // Hash the password with the salt
  pwd = bcrypt.hashSync(pwd, salt);

	pool.getConnection(function(err, conn) {
		if(err) console.error('err', err);

		conn.query('insert into MEMBER(id, name, pwd, salt) values (?,?,?,?)',[id,name,pwd,salt], function(err, result) {
			if(err) console.error('err',err);

			if(result.affectedRows == 1) {
				res.json({status:'success'});
			} else {
				res.json({status:'fail'});
			}
			conn.release;
		});
	});

});


router.get('/admin', function(req, res) {
  res.render('admin');
});

router.post('/admin/upload', function(req, res) {

    var mvtitle = req.body.mvtitle;
    var mvsummary = req.body.mvsummary;
    var mvrate = req.body.mvrate;
    var mvfirst= req.body.mvfirst;
    var orgposter = req.files.mvposter.originalname;
    var saveposter = req.files.mvposter.name;


    pool.getConnection(function(err, conn) {
      if(err) console.error('err', err);

        conn.query('insert into MOVIE(TITLE, SUMMARY, RATE, FIRST, ORGPOSTER, SAVEPOSTER) values (?,?,?,?,?,?)'
          ,[mvtitle,mvsummary,mvrate,mvfirst,orgposter,saveposter], function(err, result) {
            if(err) {
                console.error('err',err);
            }
            console.log('result', result);
            if(result.affectedRows == 1) {
                res.redirect('/admin');
            } else {
                res.json({status:'fail'});
            }
        });
      conn.release();
    });
});
 router.get('/board', function(req, res){
   res.render('board');
 });
module.exports = router;
