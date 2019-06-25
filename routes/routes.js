// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
const passport = require("passport");

module.exports = function(app) {

    app.get('/auth/google/callback',  
    passport.authenticate('google', { failureRedirect: '/', session: false }),
    (req, res) => {
        res.redirect("/");
        res.sendFile(path.join(__dirname, "../public/input.html"));
    }
  );

// Serve a test API endpoint
// This is just to test your API -- we're gonna delete this endpoint later
// app.get('/test', (req, res) => {  
//     res.send('Your api is working!');
//   });

};
