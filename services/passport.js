const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Setup options for local strat
const localOptions = { usernameField: 'email'};

const localLogin = new LocalStrategy( localOptions, function(email, password, done){
	//verify username and password
	User.findOne({ email: email.toLowerCase() }, function(err, user){
		
		if (err) { return done(err); }

		if (!user) { return done(null, false); } //no user found

		// compare passwords now
		user.comparePassword(password, function(err, isMatch){
			
			if (err) { return done(err); }

			if (!isMatch) { return done(null, false); } //if passwords dont match

			return done(null, user);

		})
	});
})


// Setup options for JWT Strat

const jwtOptions = { 
	jwtFromRequest: ExtractJwt.fromHeader('authorization'), // look in authorization header for jwt
	secretOrKey: config.secret
};


// Create JWT Strat
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
	
	User.findById(payload.sub, function(err, user){
		
		if (err) { return done(err, false); }

		if(user){
			done(null, user);
		}
		else{
			done(null, false);  //user could not be found
		}
	})
});

// Select Strat
passport.use(jwtLogin);
passport.use(localLogin);