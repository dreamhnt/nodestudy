var mysql = require('mysql');
var bcrypt = require('bcrypt');
var passport = require('passport')
  ,LocalStrategy = require('passport-local').Strategy
  ,FacebookStrategy = require('passport-facebook').Strategy;
var dbconfig = require('./database');

var pool = mysql.createPool(dbconfig.config);

module.exports = function(passport) {
  // serialize
// 인증후 사용자 정보를 세션에 저장
  passport.serializeUser(function(user, done) {
    done(null, user);
  });


// deserialize
// 인증후, 사용자 정보를 세션에서 읽어서 request.user에 저장
  passport.deserializeUser(function(user, done) {
    //findById(id, function (err, user) {
    done(null, user);
    //});
  });


  /* 로컬 가입 strategy를 사용한다. local-signup 이라는 이름을 주며 안주게 되면 기본값은 'local'이다.*/
  passport.use('local-signup', new LocalStrategy({
    usernameField:'id',
    passwordField:'pwd',
    passReqToCallback:true
  }
  , function(req, id, pwd, done){
        var name = req.body.name;
        var salt = bcrypt.genSaltSync(12);
        // Hash the password with the salt
        var hash = bcrypt.hashSync(pwd, salt);

        pool.getConnection(function(err, conn) {
          if(err) return done(err);

          conn.query('select * from MEMBER where ID=?',[id], function(err, result) {
            if(err) return done(err);
            console.log('result',result)
            if(result.length){
              return done(null, false, req.flash('signupMessage', '아이디가 존재합니다.'));
            } else {
              var newUserInfo = {
                id: id,
                pwd: hash,
                name: name
              };
              conn.query('insert into MEMBER(ID, NAME, PWD, SALT) values (?,?,?,?)',[id,name,hash,salt],function(err, result){
                if(err) return done(err);
                return done(null, newUserInfo);
              });
            }
          });
          conn.release;
        });
    })
  );

  passport.use('local-login', new LocalStrategy({
      usernameField:'id',
      passwordField:'pwd',
      passReqToCallback:true
    }
    , function(req, id, pwd, done){
      pool.getConnection(function(err, conn) {
        if(err) console.error('err', err);

        conn.query('select * from MEMBER where ID=?',[id], function(err, result){
          if(err) return done(err);
          if(!result.length) {
            return done(null, false, req.flash('loginMessage','아이디가 존재하지 않습니다'));
          }
          var dbsalt = result[0].SALT;
          var dbpwd = result[0].PWD;
          pwd = bcrypt.hashSync(pwd, dbsalt);
          if(pwd == dbpwd){
            return done(null, result[0]);
          } else {
            return done(null, false, req.flash('loginMessage','패스워드를 확인해주세요'));
          }
        });
        conn.release;
      });
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
}
