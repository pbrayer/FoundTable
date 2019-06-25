// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

module.exports = function(app) {

// Serve a test API endpoint
// This is just to test your API -- we're gonna delete this endpoint later
app.get('/test', (req, res) => {  
    res.send('Your api is working!');
  });

};
