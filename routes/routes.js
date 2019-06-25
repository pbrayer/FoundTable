// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
const passport = require("passport");

// Checks if a user is logged in
const accessProtectionMiddleware = (req, res) => {  
    if (req.isAuthenticated()) {
        res.sendFile(path.join(__dirname, "../public/input.html"));
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
        res.sendFile(path.join(__dirname, "../public/input.html"));
    }
  );

  app.get('/protected', (req, res) => {  
      accessProtectionMiddleware(req,res)
  });

// Serve a test API endpoint
// This is just to test your API -- we're gonna delete this endpoint later
// app.get('/test', (req, res) => {  
//     res.send('Your api is working!');
//   });

};
