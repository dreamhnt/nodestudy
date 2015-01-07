/**
 * Created by ljsis on 15. 1. 7.
 */
var bcrypt = require('bcrypt');

exports.hello = function(){
  console.log('hello');
};

exports.hashPassword = function(pass) {
  bcrypt.genSalt(12, function(err, salt){
    if(err) console.error('err',err);
    console.log(salt);
    bcrypt.hash(pass, salt, function(err, hash){
      if(err) console.error('err',err);
      console.log(hash);
      return hash;
    });
  });
};
