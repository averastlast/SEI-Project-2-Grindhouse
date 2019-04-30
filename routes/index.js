let express = require('express')
let router = express.Router()

// Create a GET index route "/" that triggers the controller index function
//home

router.get('/', function(req, res,) {
    res.render('index');
  });
  

module.exports = router