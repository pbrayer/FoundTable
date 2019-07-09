import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from './App';
import Input from './Input';
import Search from './Search';
import About from './About';
import Tableview from './Tableview';

import ReactDOM from 'react-dom';

const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require('express-session');



// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require("./models");

// // Static directory
// app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add session support
app.use(session({  
  secret: process.env.SESSION_SECRET || 'default_session_secret',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());  
app.use(passport.session());

passport.serializeUser((user, done) => {  
  done(null, user);
});

passport.deserializeUser((userDataFromCookie, done) => {  
  done(null, userDataFromCookie);
});

// Set up passport strategy
passport.use(new GoogleStrategy(  
  {
    clientID: process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_ID,
    clientSecret: process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_SECRET,
    callbackURL: 'https://foundtable.herokuapp.com/auth/google/callback',
    scope: ['email'],
  },
  // This is a "verify" function required by all Passport strategies
  (accessToken, refreshToken, profile, cb) => {
    console.log('Our user authenticated with Google, and Google sent us back this profile info identifying the authenticated user:', profile);
    return cb(null, profile);
  },
));

// Routes
// =============================================================
require("./routes/routes")(app);
  
// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

const RouterMapping = () => (
  <Router>
    <Route exact path='/' component={App} />
    <Route exact path='/input' component={Input} />
    <Route exact path='/search' component={Search} />
    <Route exact path='/about' component={About} />
    <Route exact path='/tableview' component={Tableview} />
  </Router>
);

ReactDOM.render(<RouterMapping />, document.getElementById('root'));

