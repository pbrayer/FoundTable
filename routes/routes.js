// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
const passport = require("passport");

// Checks if a user is logged in
const accessProtectionMiddleware = (req, res, next) => {  
    if (req.isAuthenticated()) {
      next();
    } else {
      res.status(403).json({
        message: 'must be logged in to continue',
      });
    }
  };

module.exports = function(app) {

    app.get('/auth/google/callback',  
    passport.authenticate('google', { failureRedirect: '/', session: false }),
    (req, res) => {
      console.log('wooo we authenticated, here is our user object:', req.user);
      res.json(req.user);
    }
  );

  app.get('/protected', accessProtectionMiddleware, (req, res) => {  
    res.sendFile(path.join(__dirname, "../public/input.html"));
  });

// Serve a test API endpoint
// This is just to test your API -- we're gonna delete this endpoint later
// app.get('/test', (req, res) => {  
//     res.send('Your api is working!');
//   });

};
