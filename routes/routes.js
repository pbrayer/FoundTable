// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
const passport = require("passport");

    // Checks if a user is logged in
    const accessProtectionMiddleware = (req, res, next) => {  
        if (req.isAuthenticated()) {
          next();
        } else {
          res.redirect("/auth/google/callback");
        }
      };

module.exports = function(app) {

    app.get('/auth/google/callback',  
    passport.authenticate('google', { failureRedirect: '/', session: true }),
    (req, res) => {
        res.redirect("/input");
    }
  );

  //This is redundant to have two routes going to the same place but keeping this for now..
  app.get("/input", accessProtectionMiddleware, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/input.html"));
  });

  app.get('/protected', accessProtectionMiddleware, (req, res) => {  
    res.sendFile(path.join(__dirname, "../public/input.html"));
  });

// Serve a test API endpoint
// This is just to test your API -- we're gonna delete this endpoint later
// app.get('/test', (req, res) => {  
//     res.send('Your api is working!');
//   });

};
